var email = document.getElementById('email')

email.addEventListener('click', ()=> {
  if (email.value === ""){
    document.getElementById('message').style.display = "block";
  }
  else{
    document.getElementById('message').style.display= "none";
  }
})

var password = document.getElementById('password');

password.addEventListener('click', ()=> {
  if (password.value === ""){
    document.getElementById('message2').style.display = "block";
  }
  else{
    document.getElementById('message2').style.display= "none";
  }
})