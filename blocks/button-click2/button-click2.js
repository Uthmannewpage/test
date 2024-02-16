document.addEventListener("DOMContentLoaded", function() {
    const buttons2 = document.querySelectorAll(".button-click2 > *");
    
    buttons2.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "lightgrey";
        });
        
        button.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "var(--background-color)";
        });
    });
});
