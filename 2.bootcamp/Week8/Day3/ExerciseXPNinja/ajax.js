function loadDoc() {
    var xhttp = new XMLHttpRequest();
    // xhttp.withCredentials = true;
    let q = document.getElementsByTagName("input")[0].value;
    let link = 'https://api.giphy.com/v1/gifs/search?api_key=PclvxPD17SyTuQRCTXJHQ10y056F5fwZ&q=' + q
    xhttp.open('GET', link);
    // xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
    xhttp.send();
    xhttp.responseType = 'json';
    xhttp.onload = function () {
        if (xhttp.status != 200) {
            console.log(`Error: ${xhttp.status}: ${xhttp.statusText}`)
        }
        else {
            // console.log(xhttp.response.data)
            built(xhttp.response.data)
        }
    }
    xhttp.onerror = function () {
        console.log("Request failed");
    };

    const built = (arr) => {
        const root = document.getElementById("root")
        arr.forEach((item, i) => {
            let div = document.createElement("div");
            div.setAttribute("class", "results")

            let img = document.createElement("img");
            img.setAttribute("src", item.images.downsized_medium.url)
            img.setAttribute("style", "width: 100%;")

            div.appendChild(img);
            root.appendChild(div);
        });
    }
}

function deleteGif() {
    document.getElementsByTagName("input")[0].value = "";
    let results = Array.from(document.getElementsByClassName("results"));
    results.forEach(element => element.remove())
}