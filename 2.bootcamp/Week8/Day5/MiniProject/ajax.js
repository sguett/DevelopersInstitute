function findSomeone() {
    var xhttp = new XMLHttpRequest();

    let numb = Math.floor(Math.random() * 100)
    let linkPeople = 'https://swapi.dev/api/people/' + numb

    xhttp.open('GET', linkPeople);

    xhttp.send();

    xhttp.responseType = 'json';

    xhttp.onprogress = function () {
        // Load icon Loading with calling function loadIcon
        loadIcon();
    }

    xhttp.onload = function () {
        if (xhttp.status != 200) {
            // Display that person isn't available
            const root = document.getElementById("root")
            deleteText(root); // delete previous elements with calling function deleteText
            let error = document.createElement("div");
            error.innerText = "Oh No! That person isn't available"
            error.setAttribute("style", "font-size : 30px")
            root.appendChild(error);
        }
        else {
            let linkPlanet = xhttp.response.homeworld
            let xplanet = new XMLHttpRequest();
            xplanet.open('GET', linkPlanet); // take HomeWorld element in an other link
            xplanet.send();
            xplanet.responseType = 'json';
            xplanet.onload = function () {
                built(xhttp.response, xplanet.response)
            }
        }
    }
    xhttp.onerror = function () {
        alert(`Error during the upload: ${xhttp.status}`);
    };

    const deleteText = (root) => { // delete previous elements
        if (root.childElementCount > 0) {
            let child = Array.from(root.children)
            child.forEach(element => element.remove())
        }
    }

    const loadIcon = () => { // Load icon and text before display results
        const root = document.getElementById("root")
        deleteText(root); // delete previous elements with calling function deleteText
        let div = document.createElement("div");
        let i = document.createElement("i");
        let text = document.createElement("div");
        div.setAttribute("class", "fa-3x");
        i.setAttribute("class", "fas fa-spinner fa-pulse");
        text.innerText = "Loading";
        text.setAttribute("style", "font-size: 30px");
        div.appendChild(i);
        div.appendChild(text);
        root.appendChild(div);
    }
    const built = (arr, link) => { // display results
        const root = document.getElementById("root")
        deleteText(root); // delete previous elements with calling function deleteText
        let name = document.createElement("div");
        name.innerText = arr.name;
        name.setAttribute("style", "font-size : 30px")

        let height = document.createElement("div");
        height.innerText = 'Height: ' + arr.height;

        let gender = document.createElement("div");
        gender.innerText = 'Gender: ' + arr.gender;

        let birth = document.createElement("div");
        birth.innerText = 'Birth Year: ' + arr.birth_year;

        let homeWorld = document.createElement("div");
        homeWorld.innerText = 'Home World: ' + link.name;

        root.appendChild(name);
        root.appendChild(height);
        root.appendChild(gender);
        root.appendChild(birth);
        root.appendChild(homeWorld);
    }
}