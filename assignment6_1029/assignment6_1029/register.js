window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myRegister");
	form.onsubmit = validateForm;
	
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var form = document.forms["myRegister"];
    var firstname = form["firstname"].value;
    var lastname = form["lastname"].value;
    var gender = form["gender"].value;
    var birthday = form["bday"].value;
    var email = form["email"].value;
    var username = form["username"].value;
    var password = form["password"][0].value;
    var retypePassword = form["password"][1].value;

    // ตรวจสอบว่ากรอกข้อมูลครบทุกช่อง
    if (!firstname || !lastname || !gender || !birthday || !email || !username || !password || !retypePassword) {
        document.getElementById("errormsg").innerHTML = "Please fill out all required fields!";
        return false; // ไม่เปลี่ยนหน้า
    }

    if (password !== retypePassword) {
        document.getElementById("errormsg").innerHTML = "Passwords do not match!";
        return false; // ไม่เปลี่ยนหน้า
    }
    
}