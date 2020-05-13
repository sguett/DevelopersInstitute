let planets = ["saturn", "pluton", "mars", "venus", "uranus"];

for (let i = 0; i < planets.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('planet');
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    newDiv.setAttribute('style', 'background-color : #' + randomColor)
    document.body.appendChild(newDiv);
}