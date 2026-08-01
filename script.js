function checkPassword(){

const password=document.getElementById("password").value;

if(password==="28/07/26"){

window.location.href="home.html";

}else{

document.getElementById("error").innerText="Incorrect special date ❤️";

}

}