import { createAndAddElement } from "./createAndAddElement.js";

export function sectionNotes(user) {
	const sectionNotes = createAndAddElement("section", "");
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
