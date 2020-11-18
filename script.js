var items = ["section1", "section2", "section3", "section4"];

function update(item, order) {
    for (i = 0; i < items.length; i++) {
        if (item != items[i]) {
            var text = document.getElementById(items[i]);
            text.style.fill = "#BEBEBE";
            text.setAttribute("font-size", "1em");
            text.setAttribute("font-weight", "normal");
            text.setAttribute("selected", "false");

            var circle = document.getElementById(i);
            circle.style.fill = "#BEBEBE";
            circle.setAttribute("r", "10");
        }
    }
}

function activate(item, order) {
    var text = document.getElementById(item);
    text.style.fill = "black";
    text.setAttribute("font-size", "1.5em");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("selected", "true");

    var circle = document.getElementById(order);
    circle.style.fill = "black";
    circle.setAttribute("r", "5");

    var circleSelect = document.getElementById("active");
    circleSelect.style.cy = circle.getAttribute("cy");

    update(item, order);
}

window.addEventListener("scroll", () => {
    var current = window.pageYOffset;
    if(current >= 2140) {
        activate("section4", "3");
    }
    else if(current >= 1350) {
        activate("section3", "2");
    }
    else if(window.pageYOffset >= 480) {
        activate("section2", "1");
    }
    else {
        activate("section1", "0");
    }
});
