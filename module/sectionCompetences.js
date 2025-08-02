import { createAndAddElement } from "./createAndAddElement.js";
import { getAsideDiv } from "./cv.js";

export function sectionCompetences(user) {
	const aside = getAsideDiv();
	const sectionCompetences = createAndAddElement("section", "", aside);
	sectionCompetences.classList.add("sectionCompetences");
	const thCompetences = createAndAddElement(
		"h6",
		"Compétences :",
		sectionCompetences
	);
	thCompetences.classList.add("miniTitle");
	const competences = createAndAddElement("p", "", sectionCompetences);
	competences.classList.add("competences");

	competences.textContent = user.competences.join(", ");
}
