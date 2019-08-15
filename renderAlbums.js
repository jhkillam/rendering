
function renderAlbums(albumList) {
    
    console.dir(albumList);    


    function buildTrackList(obj){
        // console.log("num of albums: " + obj.albums.length)

        // return `
        // <p>${obj.artist}</p>
        // <p>${obj.albums[0].title}</p>
        // <p>${obj.albums[0].songs[0].title}</p>
        // <p>${obj.albums[0].songs[1].title}</p>
        // <p>${obj.albums[0].songs[2].title}</p>
        // <p>${obj.albums[0].songs[3].title}</p>
        // <p>${obj.albums[0].songs[3].title}</p>
        // `
        // console.log("album 1: " + obj.albums[0].title)
        
        let artistName = `<h1 id="albumTitle">${obj.artist}</h1>`
        let albumListHTML = ""

        function buildTrackList(albumName) {
            let trackListHTML = ""
            for (let index = 0; index < albumName.songs.length; index++) {
                console.log(albumName.songs[index].title)
                trackListHTML = trackListHTML + `
                <div class="trackNameContainer">
                <span><i class="fas fa-play playButton"></i> ${albumName.songs[index].title}</span><span>${albumName.songs[index].length}</span>
                </div> <hr>`
            }
            return trackListHTML
        }

        for (let index = 0; index < obj.albums.length; index++) {
                albumListHTML = albumListHTML + `
                <div class="albumTitle" id="album${index}">
                    <img class="albumCover" src="${obj.albums[index].albumCover}" alt="${obj.albums[index].title} Album Cover">
                    <h2>${obj.albums[index].title}</h2>
                </div>
                <hr>
                <div class="albumTrackList">
                ` + buildTrackList(obj.albums[index]) + `
                </div>
                `
        }

        return `
        ${content.innerHTML = artistName}<hr>
        ${albumListHTML}
        `
    }

    let trackList = albumList.map(buildTrackList).join("");
    return trackList;
}

function albumList() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}