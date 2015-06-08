describe("My First Test", function(){
    var $scope;
    beforeEach(module("AngularPractise"));
    
    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('controller1', {$scope: $scope});
    }));
    
    it("controller first test", function(){
        expect($scope.names).toBe("hari");
    });
});