let input = document.getElementById("text");

input.addEventListener("keypress", (e) => {
        let key = e.keyCode;
        console.log(key);
        if (key < 97 || key > 122) {
            input.value = input.
            input.value = input.value.replace(e.key, "");
        }

    }

)