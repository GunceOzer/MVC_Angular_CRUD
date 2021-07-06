app.controller('MyCrudCtrl', function ($scope, MyCrudService) {

	$scope.divAdd = false;
	GetAll();

	function GetAll() {
		MyCrudService.getAllEmployees().then(function (result) {
			$scope.Employees = result.data;
		})
	}

	$scope.AddUpdate = function () {
		var action = $scope.Action;
		var E = {
			EmployeeID: $scope.EmployeeID,
			FullName: $scope.FullName,
			EMPCode: $scope.EMPCode,
			Mobile: $scope.Mobile,
			Position: $scope.Position
		}

		if (action == 'Update') {
			MyCrudService.updateEmployee(E).then(function (result) {
				alert(result.data);
				GetAll();
				$scope.divAdd = false;
			})
		}
		else {
			MyCrudService.addEmployee(E).then(function (result) {
				alert(result.data);
				GetAll();
				$scope.divAdd = false;
			})
		}
	}

	$scope.Delete = function (id) {
		MyCrudService.deleteEmployee(id).then(function (result) {
			alert(result.data);
			GetAll();
			$scope.divAdd = false;
		})
	}


	$scope.AddE = function () {
		$scope.divAdd = true;
		$scope.Action ='Add';
	}

	$scope.Edit = function (emp) {
		$scope.divAdd = true;
		$scope.EmployeeID = emp.EmployeeID;
		$scope.FullName = emp.FullName;
		$scope.EMPCode = emp.EMPCode;
		$scope.Mobile = emp.Mobile;
		$scope.Position = emp.Position;
		$scope.Action = 'Update';
	}

	$scope.Close = function () {
		$scope.divAdd = false;
	}
});