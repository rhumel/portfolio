$(document).ready(function(){




//on click event to open about me
// the arrow makes it look like user should click the arrow, 
// but the whole page can be clicked

$(document).on("click", function(event) {
    event.preventDefault();
    
    window.open("about.html", "_blank");
    
    })

});