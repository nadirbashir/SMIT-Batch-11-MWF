// var firstEleByClass = document.querySelector('.para');
// var firstEleByTag = document.querySelector('p');
// var EleById = document.querySelector('#p');
// var allDivEle = document.querySelectorAll('div');
var container = document.querySelector("body");
// console.log(container.childNodes)
// console.log(container.children)
// console.log(container.firstChild)
// console.log(container.firstElementChild)
// console.log(container.parentElement)
// console.log(container.parentNode)
// console.log(container.firstChild)
// console.log(container.firstChild.nextSibling)

function addPara() {
  var text = document.querySelector("#text");
  var paraEle = document.createElement("p");
  paraEle.innerHTML = text.value;
  paraEle.className = "border";

  container.append(paraEle);
  text.value = "";
}
function addImage() {
  var container = document.querySelector("#imageContainer");
  var imageEle = document.createElement("img");
  imageEle.src = "./images/old.jpg";
  imageEle.setAttribute("class", "square");
  //   imageEle.className = "square";
  //   imageEle.setAttribute("class", "border");
  imageEle.classList.add("border");
  console.log(imageEle.classList);

  //   container.append(imageEle);
  //   container.appendChild(imageEle);
  container.prepend(imageEle);
}
