document.getElementById("button").addEventListener("click", loadusers);

// Load github users

function loadusers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.github.com/users");

    xhr.onload = function () {
        if (this.status === 200) {
            var users = JSON.parse(this.responseText)

            console.log('',users );
            
        }
    }
    xhr.send();
}