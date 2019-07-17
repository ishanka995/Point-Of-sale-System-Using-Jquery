var rres = true;

function addCustomer(customerName, customerAge, customerTp, customerSalary) {
    var customerObjrct = new Customer(customerName, customerAge, customerTp, customerSalary);
    customer.push(customerObjrct);
}
function getAllCustomers() {
    return customer;
}

function viewAllCus() {
    var temp = getAllCustomers();
    $('#tbo').empty();
    for (var i = 0; i < temp.length; i++) {
        var ccname = temp[i].getCustomerName();
        var ccage = temp[i].getCustomerAge();
        var cctp = temp[i].getCustomerTp();
        var ccsal = temp[i].getCustomerSalary();
        $('#tabl').append('<tr><td>' + ccname + '</td><td>' + ccage + '</td><td>' + cctp + '</td><td>' + ccsal + '</td></tr>');
    }
}

function customerAdd() {
    //alert("s");
    var cusName = $("#cusTxt").val();
    var cusAge = $("#AgeTxt").val();
    var cusTp = $("#txtTP").val();
    var cusSalary = $("#salTxt").val();

    if (cusName == '') {
        $("#cusTxt").focus();
    } else if (cusAge == '') {
        $("#AgeTxt").focus();
    } else if (cusTp == '') {
        $("#txtTP").focus();
    } else if (cusSalary == '') {
        $("#salTxt").focus();
    } else {
        addCustomer(cusName, cusAge, cusTp, cusSalary);
        viewAllCus();
        $('.modal').modal('hide');
        clerTextFiles();
    }

}



function   clerTextFiles() {
    $("#cusTxt").val('');
    $("#AgeTxt").val('');
    $("#txtTP").val('');
    $("#salTxt").val('');
}

//customer searching starts here

function serachCustomer(customerName) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == customerName) {
            var ccname = customer[i].getCustomerName();
            var ccage = customer[i].getCustomerAge();
            var cctp = customer[i].getCustomerTp();
            var ccsal = customer[i].getCustomerSalary();
            var cusTemp = new Customer(ccname, ccage, cctp, ccsal);
            return cusTemp;
        }
    }
}

function  cusSea() {
    cusSec();
    // alert($('#cse').val().trim());
    if (serachCustomer($('#cse').val().trim())) {

        var temV = serachCustomer($('#cse').val().trim());
        var ccname = temV.getCustomerName();
        var ccage = temV.getCustomerAge();
        var cctp = temV.getCustomerTp();
        var ccsal = temV.getCustomerSalary();
        //showwing in a panel
        $('#cna').text(ccname);
        $('#cag').text(ccage);
        $('#ctp').text(cctp);
        $('#csl').text(ccsal);
        $('#cusSearR').fadeIn(1000);

    } else {
        alert("No Customer Registerd For That Name..!");

        $('#cse').val('');
    }

}

function  cusSec() {

    $('#cusSearR').fadeOut(1000);
}
 // customer updating starts here

function updateCustomer(deleteN,customerName, customerAge, customerTp, customerSalary) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == deleteN) {
            customer.splice(i, 1);
            addCustomer(customerName, customerAge, customerTp, customerSalary);

        }
    }
}

function getAllCustomers() {
    return customer;
}
$('#cusE').click(function () {

    if (rres == true) {
        loadUpdateCustomerDetails();

        $('#cusEdi').modal('toggle');
        $('#cusEdi').modal('show');
    } else {
        $('#cse').focus();
        alert('Select a Customer Before Delete..!');
    }
});

function loadUpdateCustomerDetails() {
    $("#ceN").text($('#cna').text());
    $("#ceA").text($('#cag').text());
    $("#ceT").text($('#ctp').text());
    $("#ceS").text($('#csl').text());
}
$('#cusUp').click(function () {
    if ($("#cusName").val() == '') {
        $("#cusName").focus();
    } else if ($("#cusAge").val() == '') {
        $("#cusAge").focus();
    } else if ($("#cusTp").val() == '') {
        $("#cusTp").focus();
    } else if ($("#cusSalary").val() == '') {
        $("#cusSalary").focus();
    } else {
        updateCustomer($('#cna').text(), $("#cusName").val().trim(), $("#cusAge").val().trim(), $("#cusTp").val().trim(), $("#cusSalary").val().trim());
        viewAllCus();
        $("#cusName").val('');
        $("#cusAge").val('');
        $("#cusTp").val('');
        $("#cusSalary").val('');
        cusSec();
        $('#cusEdi').modal("hide");
    }
});

function deleteCustomer(customerName) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == customerName) {
            customer.splice(i, 1);
            return true;
        }
    }
}
$('#crd').click(function () {
    deleteCustomer($('#cse').val().trim());
    viewAllCus();
    cusSec();
});

$('#delBuCu').click(function () {
    if (rres == true) {
        $('#cusDel').modal('toggle');
        $('#cusDel').modal('show');
    } else {
        $('#cse').focus();
        alert('Select a Customer Before Delete..!');
    }

});

$('#crd').click(function () {
    deleteCustomer($('#cse').val().trim());
    viewAllCus();
    cusSec();
});

function CustomerValidations() {
    var cusName = document.getElementById('pppp');
    if($('#cusTxt').val()==""){
        window.alert("Please enter your name.");
        cusName.focus();
        return false;
    }}
