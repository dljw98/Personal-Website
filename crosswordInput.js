function create_inputs() {     
    var number = document.getElementById("number").value;
    var newWindow = window.open("", "_parent");
    newWindow.document.write("<form>");
    for(i = 1; i <= number; i++) {
        newWindow.document.write('<input type="text" id="box' + i + '" />');
    }
    newWindow.document.write("</form>");
}

function remove(id){
    var element = document.getElementById(id);
    element.remove();
}

function reset(id){
    var dimensions =  document.getElementById("dimensions");
    dimensions.style.display = "inline";
}

function addinputFields(){
    var rows = document.getElementById("rows").value;
    var cols = document.getElementById("cols").value;
    
    for (i=0; i<rows; i++){

        for (j=0; j<cols; j++) {
            var input = document.createElement("input");
            num = i+j;
            id = "input " + num;
            cl = "input " + num;
            input.setAttribute("id", id)
            input.setAttribute("class", cl)
            input.type = "text";
            container.appendChild(input);
        }
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
    var dimensions =  document.getElementById("dimensions");
    dimensions.style.display = "none";
}