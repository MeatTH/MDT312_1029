window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);
	
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		
        
        var allbox = document.querySelectorAll("#layer div");
        if (allbox.length == 0 && second > 0) {
			
            alert("You win!");
            clearInterval(timer);
            clearScreen();
			return;
        } else if (second == 0 && allbox.length > 0) {
			
            alert("Game over");
            clearInterval(timer);
            clearScreen();
			return;
        }
		second--;
        x.innerHTML = second;


		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value; // รับจำนวนกล่อง
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value; // รับค่าสีที่เลือก

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
        tempbox.className = "square"; // ตั้งชื่อคลาส
        tempbox.id = "box" + i;
        tempbox.style.backgroundColor = colorDrop;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        gameLayer.appendChild(tempbox); // เพิ่มกล่องลงในเกม
        bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");

    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}




