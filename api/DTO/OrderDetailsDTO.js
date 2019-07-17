function Orderdetails(OrderID, ItemName, Qty, UnitPrice) {
    var _OrderID = OrderID;
    var _ItemName = ItemName;
    var _Qty = Qty;
    var _UnitPrice = UnitPrice;

    this.getOrderID = function () {
        return _OrderID;
    }
    this.getOrderItemName= function () {
        return _ItemName;
    }

    this.getQty = function () {
        return _Qty;
    }
    this.unitPrice = function () {
        return _UnitPrice;
    }

    this.setOrderID = function (OrderID) {
        _OrderID = OrderID;

    }
    this.setOrderItemName = function (ItemName) {
        _ItemName = ItemName;

    }
    this.setQty = function (Qty) {
        _Qty = Qty;

    }
    this.setUnitPrice = function (UnitPrice) {
        _UnitPrice = UnitPrice;
    }


}
