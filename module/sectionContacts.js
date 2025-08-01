import { createAndAddElement } from "./createAndAddElement.js";

export function sectionContacts(user) {
	const sectionContacts = createAndAddElement("section", "");
	sectionContacts.classList.add("sectionContacts");
	const thContacts = createAndAddElement("h6", "Contacts :", sectionContacts);
	thContacts.classList.add("miniTitle");
	const contacts = createAndAddElement("p", "", sectionContacts);
	contacts.classList.add("contacts");

	contacts.innerHTML = `<p>Tel : ${user.contacts.tel}<br>Mail : ${user.contacts.email}<br>Github : ${user.contacts.reseaux.github}<br>Linkedin : ${user.contacts.reseaux.linkedin}</p>`;
}
