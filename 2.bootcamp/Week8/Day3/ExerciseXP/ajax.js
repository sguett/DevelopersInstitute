var xhttp = new XMLHttpRequest();
let link = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC'
xhttp.open('GET', link);
// xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
xhttp.send();
xhttp.responseType = 'json';

xhttp.onload = function () {
    if (xhttp.status != 200) {
        console.log(`Error: ${xhttp.status}: ${xhttp.statusText}`)
    }
    else {
        console.log(xhttp.response)
    }
}
xhttp.onerror = function () {
    console.log("Request failed");
};