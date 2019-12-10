function loadContent(){
    var request = new XMLHttpRequest();
    request.open("get", "/users");
    request.send();

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            var users = JSON.parse(request.responseText);
            console.log(users);
            // append the list of users to the DOM 
        }
    }

    // on button click load the data 
}

loadContent();