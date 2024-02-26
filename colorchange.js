let btn = document.querySelector("button")
let body = document.querySelector("body")
let para = document.querySelector("p")
// btn.addEventListener("click", () => {
//     let random = Math.floor(Math.random() * 16777251)
//     let getcode = "#" + random.toString(16)
//     para.innerText=getcode
//     body.style.backgroundColor = getcode;
// })
btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 256)
    let getcode = "#" + random
    para.innerText=getcode
    body.style.backgroundColor = getcode;
})