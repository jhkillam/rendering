
function renderNametags(nametags) {
    
    function buildNametagHTML(obj) {
    return `
        <div class="text-center mt-5">
            <div style="background-color: blue; height: 50px; width: 300px; color: white; padding-top: 13px; font-weight: bold">Hello, my name is:</div>
            <div style="border: 1px solid blue; height: 100px; width: 300px; padding-top: 25px; font-size: 2em">${obj}</div> 
        </div>
    `
    }
    let nametagReturnArray = nametags.map(buildNametagHTML);
    let nameTagsString = nametagReturnArray.join("");
    return nameTagsString;
}




function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}