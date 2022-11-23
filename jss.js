// ПРОГРЕСС БАР .........................................

let progressBar = document.querySelector(".js-pr-line");

document.onscroll = function () {
  let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
  // window.scrollY - на сколько прикрутили вниз
  // document.body.clientHeight - высота body 
  // window.innerHeight - высота окна просмотра

  progressBar.style.width = progressLine + "%";

  console.log(WindowH);
}