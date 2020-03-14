let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
svg.setAttribute("viewBox", "0 0 500 500");
let colours = ["#98D2EB", "#E1F2FE", "#B2B1CF", "#77625C", "#49392C"]

function createCircle(x,y,r){
    let circle = document.createElementNS(xmlns,"circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    let randomColour = colours[Math.floor(Math.random()*colours.length)]
    circle.setAttribute("fill", randomColour);
    circle.setAttribute("stroke","black");
    svg.appendChild(circle);
};

for (let i = 0; i < 1200; i++){
    let r = Math.random()*12 + 3
    let x = Math.random()*499 + 1;
    let y = Math.random()*499 + 1;
    createCircle(x,y,r);
}

document.body.appendChild(svg);