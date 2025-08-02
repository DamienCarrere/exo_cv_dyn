import { createAndAddElement } from "./createAndAddElement.js";
import { getMainDiv } from "./cv.js";
export function sectionDiplomes(user) {
	const main = getMainDiv();
	const sectionDiplomes = createAndAddElement("section", "", main);
	sectionDiplomes.classList.add("sectionDiplomes");
	const thDiplomes = createAndAddElement("h6", "Diplômes :", sectionDiplomes);
	thDiplomes.classList.add("miniTitle");
	const diplomes = createAndAddElement("p", "", sectionDiplomes);
	diplomes.classList.add("diplomes");

	diplomes.textContent = user.diplomes
		.map(
			(diplome) =>
				`${diplome.intitule} - (${diplome.annee_obtention}) => ${diplome.etablissement.nom}, ${diplome.etablissement.ville}`
		)
		.join(" | ");
}
