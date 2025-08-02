import { createAndAddElement } from "./createAndAddElement.js";
import { headerCV } from "./headerCV.js";
import { sectionDiplomes } from "./sectionDiplomes.js";
import { sectionCompetences } from "./sectionCompetences.js";
import { sectionContacts } from "./sectionContacts.js";
import { sectionHobbies } from "./sectionHobbies.js";
import { sectionNotes } from "./sectionNotes.js";
import { sectionOutils } from "./sectionOutils.js";
import { sectionProjets } from "./sectionProjets.js";
import { buttonCarousel } from "./buttonCarousel.js";

const header = createAndAddElement("header", "");
header.classList.add("headerClass");
const divContent = createAndAddElement("div", "");
divContent.classList.add("divContent");
const aside = createAndAddElement("aside", "", divContent);
aside.classList.add("asideClass");
const main = createAndAddElement("main", "", divContent);
main.classList.add("mainClass");
const footer = createAndAddElement("footer", "");
footer.classList.add("footerClass");

export const getHeaderDiv = () => header;
export const getAsideDiv = () => aside;
export const getMainDiv = () => main;
export const getFooterDiv = () => footer;

export function createCv(user) {
	header.innerHTML = "";
	aside.innerHTML = "";
	main.innerHTML = "";
	footer.innerHTML = "";
	headerCV(user);
	sectionDiplomes(user);
	sectionCompetences(user);
	sectionContacts(user);
	sectionHobbies(user);
	sectionNotes(user);
	sectionOutils(user);
	sectionProjets(user);
	buttonCarousel();
}
