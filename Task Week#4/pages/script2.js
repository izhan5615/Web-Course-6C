function check(params) {
    let str = document.getElementById('email').value;
    let str2 = document.getElementById('pass').value;
    
    let regex = /[^a-zA-Z0-9_@.]/;

    let hasError = false;
    let errorMessage = "";

    if (str !== '' && str2 !== '') {

        if ((regex.test(str) || !/@/.test(str)) || (str.slice(-1) == "." || str.slice(0, 1) == ".") ||
            (/@\./.test(str))) {
            if (str2.length < 8) {
                errorMessage = "Invalid email/password";
                hasError = true;
            } else {
                errorMessage = "Please enter a valid email address";
                hasError = true;
            }
        }

        regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
        if (str2.length < 8 && !hasError) {
            errorMessage = "Password cannot be less than 8 characters";
            hasError = true;
        }
        
        if (!regex.test(str2) && !hasError) {
            errorMessage = "Password must contain special characters";
            hasError = true
        }

       
    } else {
        errorMessage = "Field(s) are empty";
        hasError = true;
    }

    if (hasError) {
        document.getElementById('error').innerHTML = errorMessage;
    } else {
        window.location.href = "signup.html"
        alert("Sucessfully Registered")
        document.getElementById('error').innerHTML = "Sucessfully Registered";
    }
}
