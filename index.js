// code your solution here
function superbowlWin(games) {
    const found = games.find(game => game.result == "W");
    if (found) {
        return found.year;
    }
}