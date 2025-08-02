import { createAndAddElement } from "./createAndAddElement.js";
import { getFooterDiv } from "./cv.js";
import { createCv } from "./cv.js";

let indexForCarousel = 0;
let usersData = [];

export function setUsersData(users) {
	usersData = users;
}

export function getIndexForCarousel() {
	return indexForCarousel;
}

export function buttonCarousel() {
	const footer = getFooterDiv();

	const buttonLeft = createAndAddElement("button", "< Précédent", footer);
	buttonLeft.classList.add("buttonLeft");
	const buttonRight = createAndAddElement("button", "Suivant >", footer);
	buttonRight.classList.add("buttonRight");

	buttonLeft.addEventListener("click", () => {
		indexForCarousel =
			(indexForCarousel - 1 + usersData.length) % usersData.length;
		createCv(usersData[indexForCarousel]);
	});
	buttonRight.addEventListener("click", () => {
		indexForCarousel = (indexForCarousel + 1) % usersData.length;
		createCv(usersData[indexForCarousel]);
	});
}
