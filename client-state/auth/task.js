const control = document.querySelectorAll('.control');
const form = document.getElementById('signin__form');
const welcomeUser = document.querySelector('.welcome');
const xhr = new XMLHttpRequest();
const activeFlag = true;

function sendData(payload) {
  xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.responseType = 'json'
  xhr.send(JSON.stringify(payload));

  xhr.onload = function () {
    welcomeUser.classList.add('welcome_active')
    let resposeObj = xhr.response;
    if (resposeObj.success) {
      document.getElementById('user_id').outerText = resposeObj.user_id;
      document.getElementById('signin').className = 'signin'
      localStorage.setItem('user', String(resposeObj.user_id))
    } else {
      document.getElementById('signin').classList.add('signin_active')
    }
  }
}

function check() {

}

function formSend(event) {
  event.preventDefault()
  let info;
  control.forEach((el) => {
    info = { ...info, [el.name]: el.value }
  })
  sendData(info)
}

form.addEventListener('submit', formSend)