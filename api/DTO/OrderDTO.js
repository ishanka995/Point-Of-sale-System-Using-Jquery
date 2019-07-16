// function Order(customerName, date, orderId, orderDetails) {
//     var _customerName = customerName;
//     var _date = date;
//     var _oid = orderId;
//     var _orderDetails = orderDetails;
//
//     this.getCustomerName = function () {
//         return _customerName;
//     }
//     this.getOrderDate = function () {
//         return _date;
//     }
//
//     this.getOrderId = function () {
//         return _oid;
//     }
//     this.getOrderDetails = function () {
//         return _orderDetails;
//     }
//
//     this.setCustomerName = function (customerName) {
//         _customerName = customerName;
//
//     }
//     this.setOrderDate = function (orderDate) {
//         _date = orderDate;
//
//     }
//     this.setOrderId = function (orderID) {
//         _oid = orderID;
//
//     }
//     this.setOrerDetails = function (orderDetails) {
//         _orderDetails = orderDetails;
//     }
//
//
// }

function OrderDTO(ItemName, Uprice, quantity, total) {
    var _ItemId = ItemName;
    var _price = Uprice;
    var _quantity = quantity;
    var _total = total;

    this.getOItemName = function () {
        return _ItemId;
    };
    this.getOUprice = function () {
        return _price;
    };
    this.getOquantity = function () {
        return _quantity;
    };
    this.getOtotal = function () {
        return _total;
    };
    this.setOItemName = function (val) {
        _ItemId = val;
    };
    this.setOUprice = function (val) {
        _price = val;
    };
    this.setOquantity = function (val) {
        _quantity = val;
    };
    this.setOtotal = function (val) {
        _total = val;
    };
}