app.service('MyCrudService', function ($http) {
	this.getAllEmployees = function () {
		var response = $http.get('GetAllEmployees');
		return response;
	}

	this.addEmployee = function (employee) {
		var response = $http({
			method: 'post',
			url: 'AddEmployee',
			data:JSON.stringify(employee)

		})
		return response;
	}

	this.updateEmployee = function (employee) {
		var response = $http({
			method: 'post',
			url: 'UpdateEmployee',
			data: JSON.stringify(employee)

		})
		return response;
	}

	this.deleteEmployee = function (empID) {
		var response = $http({
			method: 'post',
			url: 'DeleteEmployee',
			params: {EmployeeID:JSON.stringify(empID)}

		})
		return response;
	}

});