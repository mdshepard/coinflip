const main = document.getElementById("main");

var coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random());
        console.log(this.state);
        // randomly set this.state to be either 0 or 1 √√√
    },
    toString: function () {
        var message = document.createElement("div");
        if (this.state == 0) {
            return("H");
        }
        else if (this.state == 1) {
            return("T");
        }
        // return “H” or “T” depending on whether this.state is 0 or 1 √√√
    },
    toHTML: function () {
        var img = document.createElement("img")
        if (this.toString() == "H") {
            img.classList = "heads";
        }

        if (this.toString() == "T") {
            img.classList = "tails";            
        }
        main.appendChild(img);
        // set the properties of the image element to show either heads or tails;
}
};

for (i = 0; i < 20; i++) {
    coin.flip();
    coin.toString();
    coin.toHTML();
}