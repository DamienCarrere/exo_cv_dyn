import { createCv } from "./module/cv.js";

async function mainJS() {
	const response = await fetch("users.json");
	const users = await response.json();

	users.forEach((user) => {
		createCv(user); // Génère un CV par utilisateur
	});

	// createCv(users[0]);
}

mainJS();
