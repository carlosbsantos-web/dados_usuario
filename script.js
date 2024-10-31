

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const button = document.querySelector('#submit')
const dados = document.querySelector('#demo')


button.addEventListener('click', (e) => {
e.preventDefault()

setTimeout(() => {

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    
    console.log(nameValue);
    console.log(emailValue);
    
    document.querySelector('#demo').innerHTML = 'Dados atualizados'
    document.querySelector('#demo').style.color = 'green'
    
    
    
    if(nameValue === '' || emailValue === '') {
    
        alert('digite seus dados')
    }


},1500);




});

