'use strict';

describe('Service: orderService', function () {

  // load the service's module
  beforeEach(module('miniCommerceApp'));

  // instantiate service
  var orderService,
    digest;
  beforeEach(inject(function (_orderService_, $rootScope) {
    orderService = _orderService_;
    digest = $rootScope.$digest;
  }));

  it('should get orders', function (done) {
    orderService.getOrders().then(function (orders) {
      expect(orders).toEqual([
        jasmine.objectContaining({code: "123987"}),
        jasmine.objectContaining({code: "237468"})
      ]);
      done();
    });
    digest();
  });

});
