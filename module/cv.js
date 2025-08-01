import { headerCV } from "./headerCV.js";
import { sectionDiplomes } from "./sectionDiplomes.js";
import { sectionCompetences } from "./sectionCompetences.js";
import { sectionContacts } from "./sectionContacts.js";
import { sectionHobbies } from "./sectionHobbies.js";
import { sectionNotes } from "./sectionNotes.js";
import { sectionOutils } from "./sectionOutils.js";
import { sectionProjets } from "./sectionProjets.js";

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
