export function createAndAddElement(
	type,
	content,
	parent = document.body,
	refParent
) {
	let elementType = document.createElement(type);
	elementType.textContent = content;

	if (refParent) {
		parent.insertBefore(elementType, refParent);
	} else {
		parent.appendChild(elementType);
	}
	return elementType;
}
