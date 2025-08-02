import { createAndAddElement } from "./createAndAddElement.js";
import { getAsideDiv } from "./cv.js";

export function sectionProjets(user) {
	const aside = getAsideDiv();
	const sectionProjets = createAndAddElement("section", "", aside);
	sectionProjets.classList.add("sectionProjets");
	const thProjets = createAndAddElement("h6", "Projets :", sectionProjets);
	thProjets.classList.add("miniTitle");
	const projets = createAndAddElement("p", "", sectionProjets);
	projets.classList.add("projets");

	projets.textContent = user.projets
		.map((projet) => `${projet.titre} (${projet.annee})`)
		.join(" || ");
}
