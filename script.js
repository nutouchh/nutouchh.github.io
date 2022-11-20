"use strict"

// a = document.querySelector('.wrapper')
// console.log(a)

// Задание 1

// while (1){
//   let answer = prompt("Желаете пройти регистрацию на сайте?");
//   if (answer == "Да"){
//   alert("Круто");
//   break;
//   }
//   alert("Попробуй еще раз");
// }


//Задание 2

// var login, password;
// login = prompt("Введите логин");

// if (login == "Админ") {
//   password = prompt("Введите пароль");
//   if (password == "Я главный") {
//     alert("Здравствуйте!");
//   } else if (!password) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (!login) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// задание 3

like.onclick = function() {
    if (like.style.backgroundColor === 'white')
    {
      like.style.backgroundColor = 'rgb(255, 48, 103)';
      like.style.color = 'white';
    }
    else{
      like.style.backgroundColor = 'white';
      like.style.color = 'rgb(255, 48, 103)';
    }
};

// let but = document.querySelector('#like');
// but.addEventListener('click', () => {
// if (but.style.backgroundColor === 'white'){
//   but.style.backgroundColor = 'red';
//   but.style.color = 'white';
// }
// else{
//   but.style.backgroundColor = 'white';
//   but.style.color = 'red';
// }
// })

//задание 4

// const btn = document.querySelector('.like');
// const i = btn.querySelector('.material-icons');
// const body = document.querySelector('.sec');
// const drawnHearts = document.querySelector('.drawn-hearts');

// btn.addEventListener("click", () => {
//     if (i.classList.contains('fa-regular')) {
//         i.classList.remove('fa-regular');
//         i.classList.add('fa-solid');
//         body.addEventListener('mousemove', drawHeart);
//     } else{
//         i.classList.remove('fa-solid');
//         i.classList.add('fa-regular');
//         body.removeEventListener('mousemove', drawHeart);
//         drawnHearts.innerHTML = '';
//     }
// });


// function drawHeart(event) {
//     let x = event.pageX;
//     let y = event.pageY;

//     let heart = document.createElement('i');
//     heart.className = 'fa-regular fa-heart';
//     heart.style = `
//     position: absolute;
//     top: ${y - 120}px;
//     left: ${x - 200}px;
//     z-index: 1000;
//     `;
//     drawnHearts.append(heart);
// }