document.addEventListener("DOMContentLoaded", function() {
    const buttons3 = document.querySelectorAll(".button-click3 > *");
    
    buttons3.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "lightgrey";
        });
        
        button.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "var(--background-color)";
        });
    });
});
