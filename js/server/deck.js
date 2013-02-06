/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = {
    Cards: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    Suits: ["C", "H", "S", "D"],
    filledDeck: [],
    randomizedDeck: [],
    numberOfDecks: 6,
    fillDeck: function() {
        var h = 0,
            i = 0,
            j = 0;
        for(h; h < this.numberOfDecks; h += 1) {
            for(i; i < 4; i += 1) {
                for(j; j < 13; j += 1) {
                    this.filledDeck.push(String(this.Cards[j]) + String(this.Suits[i]));
                    //document.write(this.Cards[j] + "" + this.Suits[i] + " ");
                }
            }
        }
    },

    randomizeDeck: function() {
        var sacrificialDeck = this.filledDeck.slice(0);
        //document.write(sacrificialDeck.length);
        for(var i = 0; i < this.filledDeck.length; i++) {
            rand = Math.floor(Math.random() * sacrificialDeck.length);
            this.randomizedDeck.push(sacrificialDeck.splice(rand, 1));
        }
        //this.randomizedDeck.push("4S");                 //THESE ARE TEMP FOR TESTING PURPOSES!!! (testing a split)  
        //this.randomizedDeck.push("4H");                 //THESE ARE TEMP FOR TESTING PURPOSES!!! (testing a split)
        //this.randomizedDeck.push("4D");                 //THESE ARE TEMP FOR TESTING PURPOSES!!! (testing a split)
        //this.randomizedDeck.push("4C");                 //THESE ARE TEMP FOR TESTING PURPOSES!!!
        this.randomizedDeck.push("AS");                 //THESE ARE TEMP FOR TESTING PURPOSES!!!
        this.randomizedDeck.push("10H");                //THESE ARE TEMP FOR TESTING PURPOSES!!!
    },
    getCard: function() {
        if(this.filledDeck.length > 0) {
            return this.randomizedDeck.pop();
        } else return 0;
    },
    emptyDeck: function() {
        this.filledDeck = [];
        this.randomizedDeck = [];
        return 1;
    },
    refillDeck: function() {
        this.emptyDeck();
        this.fillDeck();
        this.randomizeDeck();
    },
    shuffleRequired: function() {
        return this.randomizedDeck.length < (52 * this.numberOfDecks * .25);
    }

};