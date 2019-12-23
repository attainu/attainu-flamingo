'use strict';

var deleteButton  = document.getElementById("deleteButton");
deleteButton.addEventListener("click", function(){

    var confirmatioByUser = confirm("This cannot be undone.\n\nAre you sure?");

    if(!confirmatioByUser) {
        return;
    }

    var mongoId = document.getElementById("mongoId").value;
    console.log(mongoId);

    var request = new XMLHttpRequest();
    request.open("post", "/delete/" + mongoId);
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            window.location.href = "/";
        }
    };

});