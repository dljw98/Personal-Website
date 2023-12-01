function addStyles(element, style) {
    element.style = style;
}

function remove(id){
    var element = document.getElementById(id);
    element.remove();
}

function generate(event){
    const key = event.key.toLowerCase();
    const isLetter = (key >= 'a' && key <= 'z');
    const isNumber = (key >= '0' && key <= '9');

    //console.log(event);
    var wordsearchWidth = ((document.getElementById("generatedwordsearchcontainer").offsetWidth)) - 30;
    wordsearchWidth =  wordsearchWidth + "px"
    //console.log(wordsearchWidth);
    
    var wordsearch = document.getElementById("text").value;
    
    //console.log(wordsearch);
    var lines = wordsearch.split("\n");
    //console.log(lines);
    var longest = lines[0].length;
    for (i=0; i<lines.length; i++){
        if ((lines[i].length > longest) && (lines[i].length != 0)) {
            longest = lines[i].length
        }
    }
    //console.log(shortest);
    var count = lines.length;
    //console.log(count);

    var container = document.getElementById("generatedwordsearch");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for (i=0; i<lines.length; i++){
        var curr = lines[i]
        
        // Creating new lines
        var div = document.createElement("div");
        id = "line " + i;
        cl = "line " + i;
        div.setAttribute("id", id);
        div.setAttribute("class", cl);
        container.appendChild(div);
        
        for (j=0; j<longest; j++){
            var letter = curr[j]
            if (letter == null) {
                letter = "";
            }
            var span = document.createElement("span");
            //console.log('sucess');
            num = i + j;
            id = "span " + num;
            cl = "span " + num;
            span.setAttribute("id", id);
            span.setAttribute("class", cl);
            span.innerHTML = letter;
            div.appendChild(span);
            //console.log(span)
            //console.log(span.value)
            //addStyles(container, `display:inline-block;`);
        }
        
    }
    
}