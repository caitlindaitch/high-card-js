var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(n){
    var deck = new Array();

    var m = values.length * suits.length;

    this.deck = new Array(m * n);

    for (i = 0; i < n; i++) {
      for (j = 0; j < suits.length; j++) {
        for (k = 0; k < ranks.length; k++) {
          this.deck[i * m + j * ranks.length + k] = new Card(ranks[k], suits[j]);
        };
      };
    };
    debugger;
  },
  shuffleDeck: function(){
    deck[i] = Math.random()
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
