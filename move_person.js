function movePerson(event){
	var person=document.getElementById("Person");
	person.setAttribute('transform','translate('+String(event.offsetX) + ',' + String(event.offsetY) + ')');

}

var svg = document.getElementById('AnimatedEventExample');
svg.addEventListener('click', movePerson);	