
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map()

    function renderCircles(obj, index) {
        console.log(obj, index);
        return `
        <div class="text-center mt-5">
           <div style="height: ${obj.radius}px; width: ${obj.radius}px; background-color: ${obj.color}; border-radius: 50%"></div>
        </div>
    `
    }
    
    let newArr = circles.map(renderCircles).join("");

    return newArr;

}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}