const name = document.querySelector('#name')
const password = document.querySelector('#password')
const email = document.querySelector('#email')

const date = document.querySelector("#date")
const form = document.querySelector('form')



form.addEventListener('submit', function(e) {
    e.preventDefault();
   console.log('name:', name.value)
   console.log('email:', email.value)
   console.log('passowrd:', password.value)
console.log("date:", date.value)



const formData = {
    name: name.value,
    email: email.value,
    password: password.value,
    date: date.value,
}




fetch('https://script.google.com/macros/s/AKfycbzROjWz6TI1hy6ZsUvN6orFc-LZpqpD3boY1sQQoQk93dJOYlOffqHjUu8VQhGjsq2Qzg/exec', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
        "content-type": "application/json" 
    }
})
.then(res => res.text())
.then(data => {
    console.log("data saeved to google sheet:", data)
    alert("form submitted");
})
.catch(error => console.log("error:", error))

})


