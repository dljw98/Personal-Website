 /*Toggles between hiding and showing the dropdown when clicked*/
 function datascience_dropdown() {
    document.getElementById("datascience-dropdown-content").classList.toggle("show");
}
//Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbutton")) {
        var dropdowns = document.getElementsByClassName("datascience-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show"); // Remove show on each dropdown element
            }
        }
    }
}