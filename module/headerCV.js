import { createAndAddElement } from "./createAndAddElement.js";
import { getHeaderDiv } from "./cv.js";

export function headerCV(user) {
	const header = getHeaderDiv();
	const titleCV = createAndAddElement("h1", "CV", header);
	titleCV.classList.add("titleCV");
	const headerCV = createAndAddElement("div", "", header);
	headerCV.classList.add("headerCV");
	const nomPrenom = createAndAddElement("h3", "", headerCV);
	nomPrenom.classList.add("nomPrenom");
	const age = createAndAddElement("h5", "", headerCV);
	age.classList.add("age");
	const profession = createAndAddElement("h4", "", headerCV);
	profession.classList.add("profession");

	nomPrenom.textContent = `${user.nom} ${user.prenom}`;
	age.textContent = `${user.age} ans`;
	profession.textContent = user.profession;
}
