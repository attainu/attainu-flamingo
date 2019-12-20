function toggleCheckboxes(event){
    
    var checkboxes = document.getElementsByClassName("checkbox");

    for(var i=0; i < checkboxes.length; i++){
        checkboxes[i].checked = event.target.checked;
    }
}

function deleteSelected(){
    
    var checkboxes = document.getElementsByClassName("checkbox");
    var itemsToBeDeleted = [];

    for(var i=0; i < checkboxes.length; i++){
        if(checkboxes[i].checked)
            itemsToBeDeleted.push(checkboxes[i].value);
    }

    if(itemsToBeDeleted.length < 1){
        alert("Please select atleast one item to delete");
        return;
    }

    var confirmation = confirm("Do you want to delete all the entries?");
    if(!confirmation){
        console.log("Hey, you don't want to delete the entries");
        return;
    }

    var deleteItems = {
        items: itemsToBeDeleted
    }
    var httpReq = new XMLHttpRequest();
    httpReq.open("delete", "/delete");

    httpReq.setRequestHeader("Content-Type", "application/json");
    httpReq.send(JSON.stringify(deleteItems));

    httpReq.onreadystatechange = function(){
        if(httpReq.readyState === 4 && httpReq.status === 200){
            // console.log("response from delete req: ", httpReq.responseText);
            window.location.href = "/";
        }
    }
}

function getUsers(){
    // http get call 
}