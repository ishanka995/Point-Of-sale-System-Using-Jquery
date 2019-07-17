

function OrderCustomer(customerName) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == customerName) {
            var ccnam = customer[i].getCustomerName();
            var ccag = customer[i].getCustomerAge();
            var cct = customer[i].getCustomerTp();
            var ccsa = customer[i].getCustomerSalary();
            var cusTemp = new Customer(ccnam, ccag, cct, ccsa);
            return cusTemp;


        }
    }

}

function CusORder() {
    if (OrderCustomer($('#InputID').val().trim())) {

        var temV = serachCustomer($('#InputID').val().trim());
        var ccname = temV.getCustomerName();
        var ccage = temV.getCustomerAge();
        var cctp = temV.getCustomerTp();
        var ccsal = temV.getCustomerSalary();

        $('#one').text(ccname);
        $('#two').text(ccage);
        $('#three').text(cctp);
        $('#four').text(ccsal);


    } else {
        alert("No Customer Registerd For That Name..!");

        $('#InputID').val('');
    }

}
// item searching starting here
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

function  iteSeas() {

    var itemNameC = $('#InputItem').val().trim();
    if (searchItem(itemNameC)) {
        var tempItem = searchItem(itemNameC);
        var itemName = tempItem.getItemName();
        var itemPrice = tempItem.getItemPrice();
        var itemQun = tempItem.getItemQun();
        updateSearch(itemName, itemPrice, itemQun);


    } else {
        alert("No item Registerd For That Name..!");

    }

}



function updateSearch(name, price, qun) {
    $('#INanme').text(name);
    $('#IPrice').text(price)
    $('#IQuantity').text(qun);
}

// Item adding starts here




function addOrder(ItemNam, Upric, quantit, tota) {


    var OrderObject = new OrderDTO(ItemNam, Upric, quantit, tota);
    orderDb.push(OrderObject);

}

function getAllOrders() {
    return orderDb;
}

function viewAllOrders() {
    var temp = getAllOrders();
    $('#OTbleBody').empty();
    for (var i = 0; i < temp.length; i++) {
        var ccn = temp[i].getOItemName();
        var cca = temp[i].getOUprice();
        var cc = temp[i].getOquantity();
        var ccs = temp[i].getOtotal();
        $('#OrderTable').append('<tr><td>' + ccn + '</td><td>' + cca + '</td><td>' + cc + '</td><td>' + ccs + '</td></tr>');
    }
}





        function OrderAdd() {


            var INameO = $("#INanme").text();
            var IpriceO = parseInt( $("#IPrice").text());
            var Oquantity =parseInt( $('#IQuantity').text()); //stock Amount
            var IquantityO = parseInt($("#OQuntity").val());// order Amount
            var Total = $("#IPrice").text() * $("#OQuntity").val();



                if (Oquantity>IquantityO){
                addOrder(INameO, IpriceO, IquantityO, Total);
                viewAllOrders();
                gettotal();
                clearItemArea();
                 }
                else{//alert("Amount exceeded! Please Cantact Manager")
                    clearItemArea();
                }
            }

      function gettotal() {

     var temptotal = 0;
    var temp = getAllOrders();
    for (var i = 0; i < temp.length; i++) {
        var Total = temp[i].getOtotal();
        temptotal = temptotal+Total;
        $('#totalP').text(temptotal);
    }
}

function clearItemArea() {
     $("#INanme").text(" ");
     $("#IPrice").text(" ");
     $("#OQuntity").val(" ");// order
     $('#IQuantity').text(" "); //stock
     $('#InputItem').val(" ")
}
// function  checkitemduplicates(INameO) {
//     var temps = getAllOrders();
//
//     for(var i = 0; i < temps.length; i++){
//      //   var ItemCode = temps.getOItemName();
//     //
//     // if($('#INanme').text() == INameO){
//
//         var newQuantity= $('#OQuntity').val()
//     var ItemCode =   $('#OrderTable tr:eq(i) td:eq(0)').val()
//         if(INameO == ItemCode){
//             console.log("Yes")
//         }else {console.log("No")
//
//         // console.log("Yes")
//         // console.log($('#INanme').text());
//         // console.log(newQuantity+oldQuantity);
//         // console.log($('#OrderTable tr:eq(0) td:eq(1)'));
//
//
//
//
//         //
//         // console.log($('#INanme').text());
//         // console.log(INameO);}
// }
//     }

// function findduplicates(INameO) {
//
//     var temps = OrderDTO;
//      var p = 0;
//      var x = $('#OrderTable').length;
//      for (var i; i <$('#OrderTable').length;i++)
//
//         var ItemCode =   $('#OrderTable tr:eq(x) td:eq(0)').val();
//         if (ItemCode==INameO){console.log("Yes")}else {console.log("No")
//         console.log(INameO)
//             console.log( $('#OrderTable tr:eq(x) td:eq(0)').val())}
//
//
// }




function findduplicates(INameO){

    var table = document.getElementById('OTbleBody');
    for (var i = 0; i< table.rows.length; i++) {
        // var itemCode =  $('#OTbleBody tr:eq(i) td:eq(0)').val();
        // var itemCode = table.rows[i].val();

        var itemCode = table.rows[i].cells[0].innerHTML;
        if (INameO == itemCode){

             var oldQty = parseInt(table.rows[i].cells[2].innerHTML);
             var newQty = parseInt($('#OQuntity').val());
             var IquantityO = +oldQty + +newQty;
            table.rows[i].cells[2].innerHTML = "hiii";
            console.log("Run");



            }
        else{

           // console.log(table.rows.length);

        }
    }
    return true;

}

$("#Cashtext").keyup(function(){
    var total = $('#totalP').text();
    var cash = $('#Cashtext').val();
    var discount = $('#Discount').val();

    var pp = total * discount /100;
    var final = total - pp;

    var balance = cash - (total-pp);
    var balancetext = $('#Balance');

    balancetext.val(balance);
    console.log(balance);
});

// function orderValidations() {
//     var date = document.getElementById('date');
//     var id = document.getElementById('')
//
//     if($('#date').val()==""){
//         window.alert("Please enter your name.");
//         date.focus();
//    return false;
//
//
// }}

$('#Renewbtn').click(function () {
    ClearCustomer();
    ClearItem();
    ClearDateTIme();
    ClearTable();
    ClearBalance();

})

function ClearCustomer() {
    $('#InputID').val("");
    $('#one').text("");
    $('#two').text("");
    $('#three').text("");
    $('#four').text("");

    var customerdiv = $('#pppp').offset().top;
    $(window).scrollTop(pppp);
}

function ClearItem() {

$('#InputItem').val("");
$('#IQuantity').text("");
$('#IPrice').text("");
$('#IQuantity').text("");
$('#OQuntity').val("");

var customerdiv = $('#pppp').offset().top;
$(window).scrollTop(pppp);
}

function ClearDateTIme() {
$('#IDtxt').val("");

}
function ClearTable() {
    $('#OTbleBody').val("");
}
function ClearTotal() {
    $('#totalP').innerHTML("00.0")
}
function ClearBalance() {
    $('#Cashtext').val("");
    $('#Discount').val("");
    $('#Balance').val("");
}

$(document).ready(function(){
    $("Renewbtn").click(function(){
        location.reload(true);
    });
});