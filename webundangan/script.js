document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("rsvpForm");
    const btn = document.getElementById("rsvpButton");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Terimakasih!");
        modal.style.display = "none";
    });
});
