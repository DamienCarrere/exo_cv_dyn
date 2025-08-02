import { createAndAddElement } from "./createAndAddElement.js";
import { getMainDiv } from "./cv.js";

export function sectionOutils(user) {
	const main = getMainDiv();
	const sectionOutils = createAndAddElement("section", "", main);
	sectionOutils.classList.add("sectionOutils");
	const thOutils = createAndAddElement("h6", "Outils :", sectionOutils);
	thOutils.classList.add("miniTitle");
	const outils = createAndAddElement("p", "", sectionOutils);
	outils.classList.add("outils");

	outils.textContent = user.outils.join(", ");
}
