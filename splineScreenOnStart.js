var linkSRC = sessionStorage.getItem('linkSRC');

function update() {
    console.log(linkSRC)
    document.querySelector(".splineBG").src = linkSRC
}