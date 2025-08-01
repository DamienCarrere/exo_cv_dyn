import { createAndAddElement } from "./createAndAddElement.js";

export function sectionOutils(user) {
	const sectionOutils = createAndAddElement("section", "");
	sectionOutils.classList.add("sectionOutils");
	const thOutils = createAndAddElement("h6", "Outils :", sectionOutils);
	thOutils.classList.add("miniTitle");
	const outils = createAndAddElement("p", "", sectionOutils);
	outils.classList.add("outils");

	outils.textContent = user.outils.join(", ");
}
