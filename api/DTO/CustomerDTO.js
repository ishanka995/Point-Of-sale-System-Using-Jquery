function Customer(cusName, cusAge, cusTp, cusSalary) {
    var _customerName = cusName;
    var _cusAge = cusAge;
    var _cusTp = cusTp;
    var _cusSalary = cusSalary;

    this.getCustomerName = function () {
        return _customerName;
    };

    this.getCustomerAge = function () {
        return _cusAge;
    };

    this.getCustomerTp = function () {
        return _cusTp;
    };

    this.getCustomerSalary = function () {
        return _cusSalary;
    };

    this.setCustomerName = function (customerName) {
        _customerName = customerName;
    };

    this.setCustomerAge = function (age) {
        _cusAge = age;
    };
    this.setCustomerTp = function (cusTp) {
        _cusTp = cusTp;
    };

    this.setCustomerSalary = function (salary) {
        _cusSalary = salary;
    };

}