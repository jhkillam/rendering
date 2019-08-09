
function renderTweets(tweets) {

    function buildTweetCard(obj) {

        let verificationCheck = ""
        if (obj.user.isVerified) {
            verificationCheck = `<i class="fas fa-user-check"></i>`
        }
    
        return `
            <div class="tweetCard">

                <div class="twitterUserHeader">

                    <div class="twitterProfilePic">
                        <img width="45" src="${obj.user.profilePic}">
                    </div>

                    <div>
                        <p class="twitterUserName">${obj.user.username} ${verificationCheck}</p>
                        <p class="twitterHandle">${obj.user.handle}</p>
                    </div>

                </div>

                <div class="tweetMessage">
                    <p>${obj.text}</p>
                </div>

                <div class="tweetFooter">
                    <p><i class="far fa-comment"></i> <span class="tweetFooterPadding">${obj.replies}</span> <i class="fas fa-retweet"></i> <span class="tweetFooterPadding">${obj.retweets}</span> <i class="far fa-heart"></i> <span class="tweetFooterPadding">${obj.likes}</span> <i class="far fa-envelope"></i></p>
                </div>
            </div>
        `
    }

    let tweetCards = tweets.map(buildTweetCard).join("");
    return tweetCards;

}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}