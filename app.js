const paragraphs = document.querySelectorAll(".banner-disc");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("banner-disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}






const text = document.querySelectorAll(".about-pic");

document.addEventListener("scroll", function () {
    text.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("about-pic--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}




