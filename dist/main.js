const images= ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg",
"./images/6.jpg","./images/7.jpg","./images/8.jpg","./images/9.jpg","./images/10.jpg",];
const img = document.querySelector("#image");
const leftNavBtn = document.querySelector("#left-btn");
const rightNavBtn = document.querySelector("#right-btn");

let currentImageIndex = 0;

img.src = images[currentImageIndex];

const navBtnContainer= document.querySelector("#nav-btns");

for(i = 0; i < images.length; i++){
    let spanElem = document.createElement('span');
    spanElem.id = "span-" + (i + 1);
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



const spans = document.querySelectorAll("#nav-btns span"); 
//console.log(spans)
// spans.forEach(x => {
//     x.addEventListener('click', ()=>{
//         alert("Hi")
//     })
// })

for(i = 0; i < spans.length; i++){
    spans[i].addEventListener('click', (e)=>{
        let splitted = e.currentTarget.id.split('-');
        console.log(splitted)
        currentImageIndex = parseInt(splitted[1]) - 1;
        img.src = images[currentImageIndex];
    })
}