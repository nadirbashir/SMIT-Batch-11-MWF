function applyItalicClass() {
  var para = document.getElementsByTagName("p");
  for (var i = 0; i < para.length; i++) {
    para[i].className = "italic";
  }
  //   console.log(para);
  //   console.log(p);
  //   para[0].className = "extra-style";
}
function changebg() {
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    divs[i].className += " primaryColor";
  }
}

function applyMaxWidth() {
  var paras = document.getElementsByClassName("para");
  for (var i = 0; i < paras.length; i++) {
    paras[i].className += " max-width";
  }
}
