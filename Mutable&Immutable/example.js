let games = {
    musicalChair :"indoor",
    caromPool :"indoor",
    cricket :"outdoor"
  }
  // ----- IN CASE OF MUTABLE -----
  console.log(games)
  // { musicalChair:"indoor", caromPool:"indoor", cricket:"outdoor" }
  // updating musical chair as outdoor game
  games.musicalChair = "outdoor"
  console.log(games)
  // { musicalChair:"outdoor", caromPool:"indoor", cricket:"outdoor" }
  // ----- IN CASE OF IMMUTABLE -----
  const {musicalChair, caromPool, cricket} = games
  const updateGames = {
    musicalChair : "outdoor"
  }
  console.log(updateGames)
  // {musicalChair: "outdoor"}

  // In the above code what I had done is rather than changing the object property I created a whole new object.

/* What’s the benefit?
Immutability increases predictability
Allows for mutation tracking
Avoiding a reference clash */