export const HomeView = () => {
    return `<main>
		        <div id="home-content" class="imgscontainer"></div>
            </main>`;
};
export const initHome = () => {
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
        createImg();
    }
    ;
};
function createImg() {
    var div = document.getElementById("home-content");
    var img = document.createElement("img");
    img.src = "../img/002.png";
    img.className = "land-scape";
    div === null || div === void 0 ? void 0 : div.appendChild(img);
}
;
//# sourceMappingURL=home.js.map