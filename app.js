'use strict';

document.querySelector('#toggle').addEventListener('click', () => {
    document.querySelector('#toggle').classList.toggle('show-journey');
});

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    document.querySelector('.panel').classList.toggle("hide");

    let panel = this.nextElementSibling;
    if (panel.style.visibility === "visible") {
      panel.style.visibility = "collapse";
    } else {
      panel.style.visibility = "visible";
    }
  });
}

fetch(`https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json`).then(response => response.json()).then(data =>{
  console.log(data);
});