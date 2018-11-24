function validateForm() {
    var name = document.myform.name;
    var email = document.myform.email;
    var phone = document.myform.phone;
    var notCall = document.myform.notCall;
    var subject = document.myform.subject;
    var comment = document.myform.comment;

    if (name.value == "") {
        document.getElementById("show").innerHTML = "Please Enter Your Name..";
        return false;
    }

    if (email.value == "") {
        document.getElementById("show").innerHTML = "Please Enter Your Email..";
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById("show").innerHTML = "Please Enter a Valid Email Address..";
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById("show").innerHTML = "Please Enter a Valid Email Address..";
        return false;
    }

    if (phone.value == "" && notCall.checked == false) {
        document.getElementById("show").innerHTML = "Please Enter Your Contact No..";
        return false;
    }

    if (subject.selectedIndex < 1) {
        document.getElementById("show").innerHTML = "Please tell us how we can help you?";
        return false;
    }

    if (comment.value == "") {
        document.getElementById("show").innerHTML = "Please put a suggestion..";
        return false;
    }
}

function enableDisable(chkbox) {
    if (chkbox.checked == true) {
        document.myform.phone.disabled = true;
    } else {
        document.myform.phone.disabled = false;
    }
}