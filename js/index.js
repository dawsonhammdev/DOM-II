


function clickEventHandler(event) {
    console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(event.target)
  }
  document.querySelector('a').addEventListener('click', clickEventHandler)
  document.querySelector('nav').addEventListener('click', clickEventHandler)
  document.querySelector('header').addEventListener('click', clickEventHandler)
  document.body.addEventListener('click', clickEventHandler)
  document.addEventListener('click', clickEventHandler)
  window.addEventListener('click', clickEventHandler)


  const body = document.querySelector("body");

//1

body.addEventListener('click', () => {
  body.style.backgroundColor="papayawhip";
  console.log("end")
});

//2

const logoChange = document.querySelector(".logo-heading");
console.log(logoChange);
logoChange.addEventListener("mouseenter", () => {
logoChange.style.transform = "scale(1.2)";
logoChange.style.transition = "all 0.3s";
})

//3

const picChange = document.querySelector(".intro")
picChange.addEventListener("dblclick", () => {
  picChange.style.transform = "scale(2)";
})

//4

const yolo = document.querySelector(".footer")
yolo.addEventListener("mousedown", () => {
  yolo.style.color = "blue";
})

//5

const yolo1 = document.querySelector(".destination")
yolo1.addEventListener("mouseover", () => {
  yolo1.style.color = "red";
})

//6

const yolo2 = document.querySelector(".intro")
yolo2.addEventListener("mousemove", () => {
  yolo2.style.color = "green";
})

//7

const yolo3 = document.querySelector(".content-section")
yolo3.addEventListener("mousewheel", () => {
  yolo3.style.transform = "scale(3)";
})

//8

const yolo4 = document.querySelector("#homeLink")
yolo4.addEventListener("mouseout", () => {
  yolo4.style.color= "purple";
})

//9

const yolo5 = document.querySelector("#homeLink2")
yolo5.addEventListener("keydown", () => {
  yolo5.style.color= "purple";
})

//10

const yolo6 = document.querySelector("#homeLink3")
yolo6.addEventListener("keyup", () => {
  yolo6.style.color= "purple";
  "keyup".stopPropagation()
})

//preventDefualt

const stopLink = document.querySelector("nav");

stopLink.addEventListener("mouseout", (yolo4) => {
  console.log("stopped link");

  yolo4.preventDefault();
})






