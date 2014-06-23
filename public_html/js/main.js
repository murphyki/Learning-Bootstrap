function userInput() {
    // Setup parameter vars
    var param1 = 0.0;
    var param2 = 0.0;
    var param3 = 0.0;
    var param4 = 0.0;

    // Get the form data
    var data = $("#mainform").serializeArray();
    
    // Transform the data
    for (var i = 0; i < data.length; i++) {
        var param = data[i];
        
        if (param.name === "param1") {
            param1 = param.value;
        }
        
        if (param.name === "param2") {
            param2 = param.value;
        }
        
        if (param.name === "param3") {
            param3 = param.value;
        }
        
        if (param.name === "param4") {
            param4 = param.value;
        }
    }

    // Calculate and display
    CalcDisplay(param1, param2, param3, param4);
}

function CalcDisplay(param1, param2, param3, param4) {
    console.info(arguments);
    // Calculate the subtotal
    var subtotal = parseFloat(param1) + parseFloat(param2) + parseFloat(param3) + parseFloat(param4);
    $("#subtotal").val(subtotal); // display the subtotal
    
    // Apply the 5% discount
    var discountAmt = subtotal * 0.05;
    $("#discountAmt").val(discountAmt); // display the discount
    
    // Apply 20% V.A.T. rate
    var vatAmt = subtotal * 0.2;
    $("#vatAmt").val(vatAmt); // display the V.A.T
    
    // Calculate the total
    var totalPrice = subtotal - discountAmt + vatAmt;
    $("#totalPrice").val(totalPrice);// display the total
}
