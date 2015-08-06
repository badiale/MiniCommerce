'use strict';

describe('Directive: myLocation', function () {

  // load the directive's module
  beforeEach(module('miniCommerceApp'));

  var element,
    scope,
    $compile,
    $location;

  beforeEach(inject(function ($rootScope, _$compile_, _$location_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    $location = _$location_;
  }));

  it('should fill "href" attribute', function () {
    element = $compile('<a my-location="#/123"></a>')(scope);
    expect(element.attr("href")).toBe('#/123');
  });

  it('should add class "active" when on the location matches the link', function () {
    element = $compile('<li><a my-location="#/123"></a></li>')(scope);
    expect(element.hasClass("active")).toBe(false);

    $location.url("/123");
    scope.$digest();
    expect(element.hasClass("active")).toBe(true);

    $location.url("/other");
    scope.$digest();
    expect(element.hasClass("active")).toBe(false);
  });
});
