function blank_value() {
    let name = document.getElementById("name").value;
    let company = document.getElementById("company").value;
    let email = document.getElementById("email").value;
    let mon = document.getElementById("mon").value;
    let message = document.getElementById("message").value;

    if (name == "" && company == "" && email == "" && mon == "" && message == "") {
            document.getElementById("msg1").innerText = "Enter name";

            document.getElementById("msg2").innerText = "Enter company";

            document.getElementById("msg3").innerText = "Enter email";

            document.getElementById("msg4").innerText = "Enter Mobile No.";

            document.getElementById("msg5").innerText = "Enter message";
            return false;
        }
    }  
    





