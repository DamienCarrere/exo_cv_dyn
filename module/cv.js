import { createAndAddElement } from "./createAndAddElement.js";
import { headerCV } from "./headerCV.js";
import { sectionDiplomes } from "./sectionDiplomes.js";
import { sectionCompetences } from "./sectionCompetences.js";
import { sectionContacts } from "./sectionContacts.js";
import { sectionHobbies } from "./sectionHobbies.js";
import { sectionNotes } from "./sectionNotes.js";
import { sectionOutils } from "./sectionOutils.js";
import { sectionProjets } from "./sectionProjets.js";

const header = createAndAddElement("header", "");
header.classList.add("headerClass");
const divContent = createAndAddElement("div", "");
divContent.classList.add("divContent");
const aside = createAndAddElement("aside", "", divContent);
aside.classList.add("asideClass");
const main = createAndAddElement("main", "", divContent);
main.classList.add("mainClass");

export const getHeaderDiv = () => header;
export const getAsideDiv = () => aside;
export const getMainDiv = () => main;

export function createCv(user) {
	headerCV(user);
	sectionDiplomes(user);
	sectionCompetences(user);
	sectionContacts(user);
	sectionHobbies(user);
	sectionNotes(user);
	sectionOutils(user);
	sectionProjets(user);
}
