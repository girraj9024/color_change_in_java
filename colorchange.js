let btn = document.querySelector("button")
let body = document.querySelector("body")
function girraj() {
    // let random = Math.floor(Math.random() * 16777251)
    // let getcode = random.toString(16)
    btn.addEventListener("click", () => {
        let random = Math.floor(Math.random() * 16777251)
        let getcode = "#" + random.toString(16)
        console.log(getcode)
        body.style.backgroundColor=getcode;
    })
}
girraj()