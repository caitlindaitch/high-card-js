var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.forEach(function (a) {
      for(var i = 0; i < suits.length; i++) {
        game.deck.push(a + suits[i]);
      }
      return this.deck;
    });
  },
  shuffleDeck: function(){
    
  },
  getMorePlayers: function(){

  },
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
