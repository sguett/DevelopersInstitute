function loadDoc() {
    var xhttp = new XMLHttpRequest();
    // xhttp.withCredentials = true;
    let q = document.getElementsByTagName("input")[0].value;
    let link = 'https://api.giphy.com/v1/gifs/search?api_key=PclvxPD17SyTuQRCTXJHQ10y056F5fwZ&q=' + q
    xhttp.open('GET',link );
    // xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
    xhttp.send();
    xhttp.responseType = 'json'; 
    xhttp.onload = function () {
        if (xhttp.status != 200) {
            console.log(`Error: ${xhttp.status}: ${xhttp.statusText}`)
        }
        else {
            console.log(xhttp.response.data)
            built(xhttp.response.data)
        }
    }
    xhttp.onerror = function () {
        console.log("Request failed");
    };
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //    document.getElementById("root").innerHTML = this.responseText;
    //   }
    // };
    const built = (arr) => {
        const root = document.getElementById("root")
        arr.forEach((item,i) => {
            let div = document.createElement("div");
            div.setAttribute("class","results")
            div.setAttribute("style","margin: 5px 5px")
            let text = document.createElement("div");
            let img = document.createElement("iframe");
    
            text.innerText = item.title;
            img.setAttribute("src",item.embed_url)
            img.setAttribute("frameBorder","0")
            div.appendChild(img);
            div.appendChild(text);
    
            root.appendChild(div);
        });
    }
}

function deleteGif(){
    document.getElementsByTagName("input")[0].value = "";
    let results = Array.from(document.getElementsByClassName("results"));
    results.forEach(element => element.remove())
}