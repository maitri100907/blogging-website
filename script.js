function readBlog(title) {
    alert("Welcome to " + title + " fashion blog! 💕");
}

function exploreFashion() {
    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });
}

function changeTheme() {
    document.body.classList.toggle("dark");
}