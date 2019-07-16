function addItem(itemName, itemPrice, itemQun) {
    var items = new Item(itemName, itemPrice, itemQun);
    item.push(items);
    return true;
}

function viewAllIte() {
    var itemTempO = getAllItem();
    $('#tbo2').empty();
    for (var i = 0; i < itemTempO.length; i++) {
        var itemName = itemTempO[i].getItemName();
        var itemPrice = itemTempO[i].getItemPrice();
        var itemQun = itemTempO[i].getItemQun();
        $('#tab2').append('<tr><td>' + itemName + '</td><td>' + itemPrice + '</td><td>' + itemQun + '</td></tr>');
    }
}

function itemAdd() {
    var itemName = $("#ite").val();
    var itemPrice = $("#ipr").val();
    var itemQun = $("#iq").val();

    if (itemName == '') {
        $("#ite").focus();
    } else if (itemPrice == '') {
        $("#ipr").focus();
    } else if (itemQun == '') {
        $("#iq").focus();
    } else {
        addItem(itemName, itemPrice, itemQun);
        viewAllIte();
        $('#IModal').modal('hide');
    }
    clerItemTextFiles();
}

function searchItem(itemName) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].getItemName() == itemName) {
            var iName = item[i].getItemName();
            var iPrice = item[i].getItemPrice();
            var iQun = item[i].getItemQun();
            var itemTemo = new Item(iName, iPrice, iQun);
            return itemTemo;
        }
    }
}


function   clerItemTextFiles() {
    $("#ite").val('');
    $("#ipr").val('');
    $("#iq").val('');
}
function getAllItem() {
    return item;
}

// items adding to the table is completed

//item delete starts here

function deleteItem(itemName) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].getItemName() == itemName) {
            item.splice(i, 1);
            return true;
        }
    }
}

$('#iteD').click(function () {
    if (rres == true) {
        $('#iteDel').modal('toggle');
        $('#iteDel').modal('show');
    } else {
        $('#itte').focus();
        alert('Select a Customer Before Delete..!');
    }
});


//item delete ends here

function  iteSea() {
    iteSec();
    var itemNameC = $('#itte').val().trim();
    if (searchItem(itemNameC)) {
        var tempItem = searchItem(itemNameC);
        var itemName = tempItem.getItemName();
        var itemPrice = tempItem.getItemPrice();
        var itemQun = tempItem.getItemQun();
        updateSearch(itemName, itemPrice, itemQun);
        $('#iteSearR').fadeIn(1000);

    } else {
        alert("No item Registerd For That Name..!");

    }

}

function  iteSec() {

    $('#iteSearR').fadeOut(1000);
}

function updateSearch(name, price, qun) {
    $('#iN').text(name);
    $('#iPri').text(price)
    $('#iQ').text(qun);
}

$('#ird').click(function () {
    var itext = $('#itte').val();
    deleteItem(itext);
    viewAllIte();
    iteSec();
});

//item update starts here
function updateItem(deleteN, itemName, itemPrice, itemQun) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].getItemName() == deleteN) {
            item.splice(i, 1);
            addItem(itemName, itemPrice, itemQun);
            return true;
        }
    }
}

$('#itEdi').click(function () {
    if (rres == true) {
        loadModalData();
        $('#itemEdit').modal('toggle');
        $('#itemEdit').modal('show');
    } else {
        $('#itte').focus();
        alert('Select a Customer Before Delete..!');
    }
});

$('#itUp').click(function () {
    if ($("#itemName").val() == '') {
        $("#itemName").focus();
    } else if ($("#itemPrice").val() == '') {
        $("#itemPrice").focus();
    } else if ($("#itemQun").val() == '') {
        $("#itemQun").focus();
    } else {
        updateItem($('#iN').text(), $("#itemName").val().trim(), $("#itemPrice").val().trim(), $("#itemQun").val().trim());
        viewAllIte();
        $("#itemName").val('');
        $("#itemPrice").val('');
        $("#itemQun").val('');
        iteSec();
        $('#itemEdit').modal("hide");

    }
});

function  loadModalData() {
    $("#itNa").text($('#iN').text());
    $("#itPr").text($('#iPri').text());
    $("#itQun").text($('#iQ').text());
}