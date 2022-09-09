const images= ["./images/1.jpg","./images/2.jpg","./images/3.jpg"];
const img = document.querySelector("#image");
const leftNavBtn = document.querySelector("#left-btn");
const rightNavBtn = document.querySelector("#right-btn");

let currentImageIndex = 0;

img.src = images[currentImageIndex];

const navBtnContainer= document.querySelector("#nav-btns");

for(i = 0; i < images.length; i++){
    let spanElem = document.createElement('span');
    spanElem.id = "span" + (i + 1);
    navBtnContainer.appendChild(spanElem);
}

rightNavBtn.addEventListener("click", ()=>{
    currentImageIndex++;
    if(currentImageIndex >= images.length){
        currentImageIndex = 0;
    }
    img.src = images[currentImageIndex];
})

leftNavBtn.addEventListener("click", ()=>{
    currentImageIndex--;
    if(currentImageIndex <= -1){
        currentImageIndex = images.length-1;
    }
    img.src = images[currentImageIndex];
})
