window.onload = loginLoad;
function loginLoad(){
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin; 
}
	const queryString = window.location.search; //จะเก็บค่า
 	//console.log(queryString);
	const urlParams = new URLSearchParams(queryString); // การดึงค่า

	const usernameRegis = urlParams.get('username')
	//console.log(usernameRegis);
	const passwordRegis = urlParams.get('password')
	//console.log(passwordRegis);

function checkLogin() {
    var form = document.forms["myLogin"];
    var usernameInput = form["username"].value;
    var passwordInput = form["password"].value;

    // ตรวจสอบว่าข้อมูลตรงกันหรือไม่
    if (usernameInput !== usernameRegis || passwordInput !== passwordRegis) {
        alert("Incorrect username or password. Please try again.");
        return false; // ไม่เปลี่ยนหน้า
    }

    alert("login success!"); 
    return true; // เปลี่ยนหน้าเมื่อข้อมูลถูกต้อง
}