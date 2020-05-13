let allBooks = [{
    title: "The Poet",
    author: "Michael Connelly",
    image: "https://images-na.ssl-images-amazon.com/images/I/51042kn58pL._SX323_BO1,204,203,200_.jpg",
    alreadyRead: true
}, {
    title: "1984",
    author: "George Orwell",
    image: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
    alreadyRead: false
}]

let newDiv = document.createElement('div');
let newTable = document.createElement('table');
let newTr = document.createElement('tr');

document.body.appendChild(newDiv);
newDiv.appendChild(newTable);
newTable.setAttribute("cellpadding", "10");
newTable.appendChild(newTr);

for (x of allBooks) {
    var newTd = document.createElement('td');
    newTr.appendChild(newTd);
    var newText = document.createTextNode(x.title + ' written by ' + x.author);
    newTd.appendChild(newText);
    if (x.alreadyRead == true) {
        newTd.setAttribute("style", "color:red");
    }
    newTd.setAttribute("align", "center");
    newTd.setAttribute("valign", "center");
    var newBr = document.createElement('br');
    newTd.appendChild(newBr);
    var newImg = document.createElement("img");
    newTd.appendChild(newImg);
    newImg.setAttribute("src", x.image);
    newImg.setAttribute("style", "width:100px; height:100px;");
}