function climbingLeaderboard(ranked, player) {
    // Write your code here
    let playerRanked = new Array(player);
    let rank = 1;
    for (let i = 0; i < ranked.length; i++) {
        if (ranked[i] != ranked[i + 1])
            rank++;
    }
    rank++;

    let j = ranked.length - 1;
    for (let i = 0; i < player.length; i++) {
        for (j; j >= 0; j--) {
            if (ranked[j] == ranked[j - 1]) {
                rank--;
            }
            else if (player[i] >= ranked[j]) {
                if (rank > 1) {
                    rank--;
                    j--;
                }
            }
        }
    }

}