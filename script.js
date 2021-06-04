/ the function compute() is executed when the control 'Compute Interest' button is clicked.
// purpose: this function takes the inputs principal, interest rate, and the number of years from the html elements, and the result is calculated and displayed on the 'Simple Interest Calculator' UI.
// the validation alert is shown on the browser when the principal value is 0 or negative number
function compute()
{
    var result = "";
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if(principal <= 0)
    {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    else{
        result = "If you deposit \<mark\> " + principal + "\</mark\>" + "\<br\> at an interest rate of \<mark\>" + rate + "%\</mark\> \<br\>" 
        + "You will receive an amount of \<mark\>" + interest + " \</mark\> \<br\>" 
        + "in the year \<mark\>" + year + "\</mark\> \<br\>";
        document.getElementById("result").innerHTML = result;
    }
}

// purpose: function updateRate() displays the percent interest rate result of the sliding control on UI
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval  + " %";
}
