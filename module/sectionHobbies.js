import { createAndAddElement } from "./createAndAddElement.js";
import { getMainDiv } from "./cv.js";

export function sectionHobbies(user) {
	const main = getMainDiv();
	const sectionHobbies = createAndAddElement("section", "", main);
	sectionHobbies.classList.add("sectionHobbies");
	const thHobbies = createAndAddElement("h6", "Hobbies :", sectionHobbies);
	thHobbies.classList.add("miniTitle");
	const hobbies = createAndAddElement("p", "", sectionHobbies);
	hobbies.classList.add("hobbies");

	hobbies.textContent = user.hobbies.join(", ");
}
