// create an event listener
document.getElementById("button").addEventListener("click", loadText);

function loadText() {
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/file async
    xhr.open('GET', 'sample.txt', true);
    
    //  OPTIONAL - used for loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState );
        
    }

    xhr.onload = function () {
        if (this.status === 200) {
            // print text to DOM
            document.getElementById("text").innerHTML = 
            this.responseText;
            }
            // Display Message if Request Fails
            else if (this.status = 404){
            document.getElementById("text").innerHTML = 
            'Not Found'  
            }
    }
    xhr.onerror = function () {
        console.log('Request Error...' );
        
    }

    // sends request
    xhr.send();
}

// HTTP Statuses
//  200: "OK"
// 403: "Forbidden"
// 404: "Not Found"