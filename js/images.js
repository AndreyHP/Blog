export const ImagesView = () => {
    return `<main>
		        <div id="images-content" class="imgscontainer"></div>
            </main>`;
};
export const initImages = () => {
    const imagesContent = document.getElementById('images-content');
    if (imagesContent) {
        createImgpage();
    }
    ;
};
function createImgpage() {
    var div = document.getElementById("images-content");
    var img = document.createElement("img");
    var img02 = document.createElement("img");
    img.src = "./img/255.png";
    img02.src = "./img/232.png";
    img.className = "img-list";
    img02.className = "img-list";
    div === null || div === void 0 ? void 0 : div.appendChild(img);
    div === null || div === void 0 ? void 0 : div.appendChild(img02);
}
//# sourceMappingURL=images.js.map
