document.getElementById("button1").addEventListener("click", loadUser);

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'user.json', true)

    xhr.onload = function () {
        if (this.status === 200) {
            var user = JSON.parse(this.responseText);
            console.log('',user.name );
            var output =  
            `<ul>
            <li>Id:${user.name}</li>
            </ul>`
            document.getElementById('user').innerHTML = output;
            
        }
    }
    xhr.send();
}