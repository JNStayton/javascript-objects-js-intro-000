var playlist = {bach: "suite in g"};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
};

function removeFromPlaylist (playlist, artistName) {
  return delete playlist.artistName;
}