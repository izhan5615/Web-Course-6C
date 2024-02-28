function check(params) {
    let str = document.getElementById('email').value;
    let str2 = document.getElementById('pass').value;
    let str3 = document.getElementById('user').value;
    let str4 = document.getElementById('gender').value;
    let str5 = document.getElementById('zip').value;
    let str6 = document.getElementById('phone').value;
    let str7 = document.getElementById('birth').value;
    let regex = /[^a-zA-Z0-9_@.]/;

    let hasError = false;
    let errorMessage = "";

    if (str !== '' && str2 !== '' && str3 !== '' && str4 !== '' && str5 !== '' && str6 !== '') {

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

    
        if (str2.length < 8 && !hasError) {
            errorMessage = "Password cannot be less than 8 characters";
            hasError = true;
        }
        regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
        if (!regex.test(str2) && !hasError) {
            errorMessage = "Password must contain special characters";
            hasError = true
        }

        regex = /[^a-zA-Z0-9]/;
        if (regex.test(str3) && !hasError) {
            errorMessage = "Invalid Username";
            hasError = true;
        } else if (str3.length < 8 && !hasError) {
            errorMessage = "Username length is less than 8";
            hasError = true;
        }

        if ((str4.toLowerCase() !== 'male' && str4.toLowerCase() !== "female") && !hasError) {
            errorMessage = "Invalid Gender";
            hasError = true;
        }

        regex = /[^0-9]/
        if (regex.test(str5) && !hasError) {
            errorMessage = "Invalid Zip Code";
            hasError = true;
        } else if (str5.length < 4 && !hasError) {
            errorMessage = "Zip Code length is less than 4";
            hasError = true;
        }

        if (regex.test(str6) && !hasError) {
            errorMessage = "Invalid Phone Number";
            hasError = true;
        } 
        
        else if (str6.length < 11 && !hasError) {
            errorMessage = "Phone Number length is less than 11";
            hasError = true;
        }


        if (str7 == "" && !hasError) {
            errorMessage = "Invalid Birth Date";
            hasError = true;
        } else {
            let sp = str7.split("-");
            let c = new Date().getFullYear();
            if (c - sp[0] < 18 && !hasError) {
                errorMessage = "Age must be above 17";
                hasError = true;
            }
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
