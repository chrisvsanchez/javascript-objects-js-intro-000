var playlist = {TheStrokes : "Someday"};

function updatePlaylist(playlist, artistName, songTitle){
  
Object.assign({}, playlist, { artistName : [songTitle]
})
}