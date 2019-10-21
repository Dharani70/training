
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.register = {
      

    };
    $scope.registers=[];

    $scope.Gender =    [
        {"Name":"Male"}, {"Name":"Female"},{"Name":"Others"},
      ];

      $scope.Country = [
        {"Name":"India"}, {"Name":"Usa"},{"Name":"Malaysia"},{"Name":"Singapore"},
      ];

      $scope.District = [
        {"Name":"Chennai"}, {"Name":"Newyork"},{"Name":"Malacca"},{"Name":"Tampines"},
      ];

      $scope.State = [
        {"Name":"Tamilnadu"}, {"Name":"Utica"},{"Name":"Tampines"},{"Name":"Pasir ris"},
      ];

      $scope.PinCode = [
        {"Name":"7701"}, {"Name":"7702"},{"Name":"7703"},{"Name":"7704"},
      ];

      $scope.EmployeeCode = [
        {"Name":"0001"}, {"Name":"0002"},{"Name":"0003"},{"Name":"0004"},
      ];

      $scope.loadData = function () {
        $http({
          method: 'GET',
          url: 'http://localhost:57971/api/values',
        })

        .then(function (response) {
          debugger;
          $scope.content = response.data;
        });
      }

      $scope.loadData();

      $scope.saveform = function(register) {
        debugger;
        $http({
          method: "POST",
          url: 'http://localhost:57971/api/values',
          data: register
        })
        .then(function (response) {
          debugger;
        },
        function (response) { // optional
              //failed
        });
      }

      

      

      

 $scope.saveform=function(){
  var newItem = {
    'FirstName': $scope.register.FirstName, 
    'LastName': $scope.register.LastName,
    'Email': $scope.register.Email, 
    'Address1': $scope.register.Address1,
    'Address2': $scope.register.Address2,
    'Address3': $scope.register.Address3,
    'PhoneNo': $scope.register.PhoneNo,
    'DateOfBirth': $scope.register.Dob,
    'Gender': $scope.register.Gender,
    'Country': $scope.register.Country,
    'District': $scope.register.District,
    'State': $scope.register.State,
    'PinCode': $scope.register.PinCode,
    'EmployeeCode': $scope.register.EmployeeCode

};
  
  $scope.registers.push(newItem);
 }


  });