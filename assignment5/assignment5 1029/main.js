let postCount = 0;

function postFunction() {
    
    let message = document.getElementById("message").value;
    
    postCount++;
   
    if (postCount === 1) {
        document.getElementById("topic").innerHTML = message;
    }
    else if (postCount === 2) {
        document.getElementById("reply1").innerHTML = message;
    }
    else if (postCount === 3) {
        document.getElementById("reply2").innerHTML = message;
    }
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    postCount = 0;
    document.getElementById("message").value = "";
}

window.onload = function() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";
};