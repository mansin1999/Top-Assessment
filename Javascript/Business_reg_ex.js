

function check_value(blnk, spanid) {
    if (blnk.value == "" || blnk.value == null || blnk.value == -1) {
        document.getElementById(spanid).innerHTML = "Please fill this"
        return false;
    } else {
        document.getElementById(spanid).innerHTML = ""
        return false;
    }
}

// ========================== Business regex ================================
function reg_ex_name(uname, spanid) {
    let reg_ex = /^([A-Za-z]{3,6})$/
   
    if (reg_ex.test(uname.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "Must accept minimum 3 and maximum 6 alphabets."
        return false;
    }
}




function reg_ex_email(uname, spanid) {
    let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg_ex.test(uname.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "Enter Proper emailid"
        return false;
    }
}


function mobile_ex(mno, spanid) {
    let rag_ex = /^[0-9]*$/
    if (rag_ex.test(mno.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "Enter digit only";
        return false;
    }
}

function mobile_length(){
    let no = document.getElementById("no").value;
    if(no.length > 10){
        document.getElementById("msg4").innerHTML = "Enter Proper No";
        return false;
    } else {
        document.getElementById("msg4").innerHTML = "";
        return false;
    }
}















