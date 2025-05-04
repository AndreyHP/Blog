import { HomeView, initHome } from "./home.js";
import { ImagesView, initImages } from "./images.js";
import { AboutView,initAbout } from "./about.js";


interface Route {
    path: string;
    view: () => string;
    init?: () => void;
}

const NotFoundView = (): string => {
    return `<h1>404</h1>`
};

const routes: Route[] = [
    {path: "#/", view: HomeView, init: initHome},
    {path: "#/404", view: NotFoundView},
    {path: "#/images",view: ImagesView, init: initImages},
    {path: "#/about",view: AboutView, init: initAbout}
];

function router(){
    const appDiv = document.getElementById("app");
    if (!appDiv) return;

    const hashLocation = window.location.hash || "#/";

    const route = routes.find((route) => route.path === hashLocation);

    if (route){

        appDiv.innerHTML = route ? route.view() : NotFoundView();
        
        if (route.init){
            route.init();
        }else{
            appDiv.innerHTML = NotFoundView();
        };
    };
};

function createButton(){
	var div = document.getElementById("div") as HTMLElement;
	var div2 = document.getElementById("div2") as HTMLElement;
	var div3 = document.getElementById("div3") as HTMLElement;
	var div4 = document.getElementById("div4") as HTMLElement;
	var div5 = document.getElementById("div5") as HTMLElement;

	var btn = document.createElement("button");
	var btn2 = document.createElement("button");
	var btn3 = document.createElement("button");
	var btn4 = document.createElement("button");
	var btn5 = document.createElement("button");

	btn.textContent = "Home";
	btn2.textContent = "Images";
	btn3.textContent = "Games";
	btn4.textContent = "Contact";
	btn5.textContent = "About";

	//btn.className = "center-btn";

	div?.appendChild(btn);
	div2?.appendChild(btn2);
	div3?.appendChild(btn3);
	div4?.appendChild(btn4);
	div5?.appendChild(btn5);

	// Add an event listener to the button
	btn2.addEventListener('click', () => {
		window.location.href = "#/images";
	});
    btn.addEventListener('click', () => {
		window.location.href = "#/";
	});  
    btn5.addEventListener('click', () => {
		window.location.href = "#/about";
	});

};

function mobileMenuf(){
	const mobileMenu = document.getElementById("mobile-menu") as HTMLElement;
	const menu = document.querySelector(".menu") as HTMLElement;

	mobileMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
})};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

document.addEventListener("DOMContentLoaded", () => {
    createButton();
	mobileMenuf();
});

