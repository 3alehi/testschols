let codemeli  = document.getElementById('codemeli')
let name  = document.getElementById('name')
let password  = document.getElementById('password')
let btn = document.querySelector('button')


btn.addEventListener('click' ,()=>{
let user = {
    name : name.value,
    password: password.value,
    codemeli: codemeli.value
}
    fetch('https://schools-ee720-default-rtdb.firebaseio.com/users.json', {
    method :"POST",
    headers :{
        "Content-type":"apliction/json"
    }
    ,body:JSON.stringify(user)
    })
    .then(re =>{
        console.log(re)
    })
})