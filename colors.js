const colorNames = [
    "BlanchedAlmond",
    "DarkGoldenRod",
    "ForestGreen",
    "PeachPuff",
    "RebeccaPurple",
    "PapayaWhip",
];

const radioDiv = document.getElementById("radios");

const inputs = colorNames.map(color => {
    var wrapper = document.createElement("p");
    var el = document.createElement("input");

    el.className = "colorInputs";

    el.setAttribute("type", "radio");
    el.setAttribute("name", "color");
    el.setAttribute("value", color);

    wrapper.append(el);
    wrapper.insertAdjacentHTML("beforeend", ` ${color}<br>`);

    return wrapper;
});

radioDiv.append(...inputs);
