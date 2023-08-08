let xhr = new XMLHttpRequest()
xhr.open("POST","https://students.netoservices.ru/nestjs-backend/auth")
let form = document.getElementById('signin__form')
if(localStorage.getItem("id")){
    document.querySelector('.signin_active').classList.remove('signin_active')
    document.querySelector('.welcome').classList.add('welcome_active')
    document.getElementById('user_id').textContent = localStorage.getItem("id");
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const f = new FormData(form)
    xhr.addEventListener('load',()=>{
            let parse = JSON.parse(xhr.response)
            if(parse.success){
                document.querySelector('.signin_active').classList.remove('signin_active')
                document.querySelector('.welcome').classList.add('welcome_active')
                localStorage.setItem('id',parse.user_id)
                document.getElementById('user_id').textContent = localStorage.getItem("id");
            }else{
                alert('Неверный логин/пароль')
            }
    })
    xhr.send(f)
})