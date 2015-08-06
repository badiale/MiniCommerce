'use strict';

describe('Service: addressService', function () {
  var addressService,
    digest,
    storageItem;

  // load the service's module
  beforeEach(module('miniCommerceApp', function ($provide) {
    // mocka o localStorage
    $provide.value('$window', {
      localStorage: {
        getItem: function (key) {
          expect(key).toBe("address");
          return storageItem;
        },
        setItem: function (key, value) {
          expect(key).toBe("address");
          expect(typeof value).toBe("string");
          storageItem = value;
        }
      }
    });
  }));

  // instantiate service
  beforeEach(inject(function (_addressService_, $rootScope) {
    addressService = _addressService_;
    digest = $rootScope.$digest;
  }));

  it('should get address list', function (done) {
    addressService.getAddress().then(function (addresses) {
      expect(addresses).toEqual([{
        id: 1,
        street: "rua 1",
        number: 10,
        city: "São Paulo",
        state: "SP"
      }, {
        id: 2,
        street: "rua 2",
        number: 20,
        city: "São Paulo",
        state: "SP"
      }, {
        id: 3,
        street: "rua 3",
        number: 30,
        city: "São Paulo",
        state: "SP"
      }]);
      done();
    });
    digest();
  });

  it('should add address', function (done) {
    var address = {
      street: "rua 4",
      number: 40,
      city: "São Paulo",
      state: "SP"
    };
    addressService.addAddress(address)
      .then(function () {
        return addressService.getAddress();
      }).then(function (addresses) {
        expect(addresses).toEqual(jasmine.arrayContaining([jasmine.objectContaining(address)]));
        expect(address.id).toBe(4);
      }).finally(done);
    digest();
  });

  it('should update address', function (done) {
    addressService.findAddressById(1).then(function (address) {
      address.street = "Rua nova";
      return addressService.updateAddress(address);
    }).then(function () {
      return addressService.findAddressById(1);
    }).then(function (address) {
      expect(address.street).toBe("Rua nova");
    }).finally(done);
    digest();
  });

  it('should remove address', function (done) {
    var address = {
      id: 3,
      street: "rua 3",
      number: 30,
      city: "São Paulo",
      state: "SP"
    };
    addressService.getAddress().then(function (addresses) {
      expect(addresses).toEqual(jasmine.arrayContaining([address]));
      return addressService.removeAddress(address);
    }).then(function () {
      return addressService.getAddress();
    }).then(function (addresses) {
      expect(addresses).not.toEqual(jasmine.arrayContaining([address]));
    }).finally(done);
    digest();
  });
});
