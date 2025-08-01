import { createAndAddElement } from "./createAndAddElement.js";

export function sectionCompetences(user) {
	const sectionCompetences = createAndAddElement("section", "");
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
