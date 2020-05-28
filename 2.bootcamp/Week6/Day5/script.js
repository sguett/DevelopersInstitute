const robots = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    }

    ,
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    }

    ,
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    }

    ,
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    }

    ,
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    }

    ,
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    }

    ,
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    }

    ,
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    }

    ,
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }

];

const main = document.getElementsByClassName("main")[0];
const input = document.getElementsByTagName("input")[0]

robots.forEach((item) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.backgroundColor = "#4EBEC3";
    card.style.borderRadius = "5%"
    card.style.height = "25rem";
    card.style.maxWidth = "100%";
    let img = document.createElement("img");
    img.src = item.image;
    img.setAttribute("style", "width: 80%; height: 70%; margin-top: 20px; margin-left: 30px");
    img.style.borderRadius = "50%"
    img.style.backgroundColor = "#303952"
    card.append(img);
    let name = document.createElement("div");
    name.setAttribute("class", "name");
    name.setAttribute("style", "margin-top: 10px; margin-left: 30px; font-weight: bold; font-size: 25px");
    name.textContent = item.name;
    card.append(name);
    let email = document.createElement("div");
    email.setAttribute("style", "margin-top: 5px; margin-left: 30px");
    email.textContent = item.email;
    card.append(email);
    main.append(card);
});

input.addEventListener("keyup", function() {
    let name = document.getElementsByClassName("name");
    let search = input.value.toUpperCase()
    for (x of name) {
        let textName = x.innerText.toUpperCase();
        console.log(textName.includes(search))
        if (textName.includes(search)) {
            x.parentElement.style.display = ""
        } else {
            x.parentElement.style.display = "none"
        }
    }
})