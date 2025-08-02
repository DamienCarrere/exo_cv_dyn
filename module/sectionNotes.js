import { createAndAddElement } from "./createAndAddElement.js";
import { getMainDiv } from "./cv.js";

export function sectionNotes(user) {
	const main = getMainDiv();
	const sectionNotes = createAndAddElement("section", "", main);
	sectionNotes.classList.add("sectionNotes");
	const thNotes = createAndAddElement("h6", "Notes :", sectionNotes);
	thNotes.classList.add("miniTitle");
	const notes = createAndAddElement("p", "", sectionNotes);
	notes.classList.add("notes");

	const noteType = user.notes;
	let totalNote = [];
	Object.entries(noteType).forEach(([key, value]) =>
		totalNote.push(key + ": " + value)
	);
	notes.textContent = totalNote.join(" | ");
}
