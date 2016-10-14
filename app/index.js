var app = angular.module("product",[]);

app.service("productData", function () {
    return [
        {
            id : 333,
            name : 'iPhone',
            price : 5400,
        },
        {
            id : 123,
            name : 'iPad',
            price : 3420,
        },
        {
            id : 345,
            name : 'iMac',
            price : 15400,
        },
        {
            id : 1010,
            name : 'iPad air',
            price : 2340,
        },
        {
            id : 990,
            name : 'iPad mini',
            price : 2200,
        },
    ]
})

app.controller("productController",["$scope","productData",function($scope,productData) {
    $scope.productData = productData;
    $scope.orderType = "id";
    $scope.order = "-";

    $scope.changeOrder = function (type) {
        $scope.orderType = type;
        if($scope.order === '') {
            $scope.order = '-';
        } else {
            $scope.order = '';
        }
    }
}]);