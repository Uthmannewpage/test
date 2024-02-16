document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button-click1 > *");
    
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "lightgrey";
        });
        
        button.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "var(--background-color)";
        });
    });
});
