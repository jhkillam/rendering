
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    
    // this iterates through the pokerHandAbstraction object when called by pokerHand.map
    function buildPokerHand(obj) {

        return `
            <img width="100" src="cards/${obj.value}${obj.suit}.png">
        `
        
    }

    // this calls buildPokerHand and joins all the results together into multiple image tags
    let pokerHandCards = pokerHand.map(buildPokerHand).join("");

    // this is the final return value that gets passed to content.innerHTML
    return `
    <div class="text-center mt-5">` + pokerHandCards + `
    </div>`;
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C",
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}