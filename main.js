import { createCv } from "./module/cv.js";
import { getIndexForCarousel } from "./module/buttonCarousel.js";
import { setUsersData } from "./module/buttonCarousel.js";

async function mainJS() {
	const response = await fetch("users.json");
	const users = await response.json();

	setUsersData(users);

	const indexForCarousel = getIndexForCarousel();

	createCv(users[indexForCarousel]);
}

mainJS();
