function validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    var except = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.co$/;

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }
    else if (email.match(except))
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "We are not accepting subscriptions from Colombia emails";
    }
    else if (email =="")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email address is required";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid e-mail address";
    }
}

function checked()
{
    var checkbox = document.getElementById("check");
    

    if (checkbox.checked)
    {
        text.innerHTML = "";
    }
    else
    {
        text.innerHTML = "You must accept the terms and conditions";
    }
}




