import { createAndAddElement } from "./createAndAddElement.js";

export function sectionHobbies(user) {
	const sectionHobbies = createAndAddElement("section", "");
	sectionHobbies.classList.add("sectionHobbies");
	const thHobbies = createAndAddElement("h6", "Hobbies :", sectionHobbies);
	thHobbies.classList.add("miniTitle");
	const hobbies = createAndAddElement("p", "", sectionHobbies);
	hobbies.classList.add("hobbies");

	hobbies.textContent = user.hobbies.join(", ");
}
