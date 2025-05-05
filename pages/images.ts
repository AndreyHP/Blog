export const ImagesView = (): string => {
    return `<main>
		        <div id="images-content" class="imgscontainer"></div>
            </main>`;
};

export const initImages = (): void => {
    const imagesContent = document.getElementById('images-content');
    if (imagesContent){
        createImgpage();
    };
};

function createImgpage(){
	var div = document.getElementById("images-content") as HTMLElement;
	var img = document.createElement("img");
	var img02 = document.createElement("img");

	img.src = "./img/255.png";
	img02.src = "./img/232.png";


	img.className = "img-list";
	img02.className = "img-list";

	div?.appendChild(img);
	div?.appendChild(img02);
}
