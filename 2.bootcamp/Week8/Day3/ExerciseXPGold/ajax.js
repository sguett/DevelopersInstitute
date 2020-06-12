var xhttp = new XMLHttpRequest();
let api_key = 'PclvxPD17SyTuQRCTXJHQ10y056F5fwZ'
let link = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=&rating=G`
xhttp.open('GET', link);
// xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
xhttp.send();
xhttp.responseType = 'json';

xhttp.onprogress = function () {
    deleteGif();
}

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

    let img = document.createElement("img");
    img.setAttribute("id", "image")
    img.setAttribute("src", arr.images.downsized.url)

    root.appendChild(img);
}

const deleteGif = () => {
    const root = document.getElementById("root");
    root.removeChild;
}
