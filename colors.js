const colorNames = [
    "BlanchedAlmond",
    "DarkGoldenRod",
    "ForestGreen",
    "PeachPuff",
    "RebeccaPurple",
    "Fuchsia",
    "PapayaWhip",
    "Whitesmoke",
    "SaddleBrown",
    "OliveDrab ",
    "tomato",
];

const radioDiv = document.getElementById("radios");
const body = document.getElementsByTagName("body")[0];

const inputs = colorNames.map(color => {
    var wrapper = document.createElement("p");
    var el = document.createElement("input");

    el.className = "colorInputs";

    el.setAttribute("type", "radio");
    el.setAttribute("name", "color");
    el.setAttribute("value", color);

    el.addEventListener("change", function(e) {
        console.log("e", e);

        body.style.backgroundColor = e.target.value;
    });

    wrapper.append(el);
    wrapper.insertAdjacentHTML("beforeend", ` ${color}<br>`);

    return wrapper;
});

radioDiv.append(...inputs);
