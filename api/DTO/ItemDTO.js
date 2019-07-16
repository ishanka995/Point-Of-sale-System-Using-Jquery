function Item(itemName, itemPrice, itemQuntity) {
    var _itemName = itemName;
    var _price = itemPrice;
    var _itemQun = itemQuntity;

    this.getItemName = function () {
        return _itemName;
    };
    this.getItemPrice = function () {
        return _price;
    };
    this.getItemQun = function () {
        return _itemQun;
    };
    this.setItemName = function (item) {
        _itemName = item;
    };
    this.setItemPrice = function (price) {
        _price = price;
    };
    this.setItemQun = function (qun) {
        _itemQun = qun;
    };

}