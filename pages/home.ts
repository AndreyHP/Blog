export const HomeView = (): string => {
    return `<main>
		        <div id="home-content" class="imgscontainer"></div>
            </main>`;
};

export const initHome = (): void => {
    const homeContent = document.getElementById('home-content');
    if (homeContent){

    createImg();    

    };
};

function createImg(){
	var div = document.getElementById("home-content") as HTMLElement;
	var img = document.createElement("img");

	img.src = "../img/002.png";

	img.className = "land-scape";

	div?.appendChild(img);
};


