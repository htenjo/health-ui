function hideList(listId, formId){
	console.log("Hiding the list");
	document.getElementById(listId).style.display = 'none';
	document.getElementById(formId).style.display = 'block';
}