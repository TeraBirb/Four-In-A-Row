class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    /** 
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    drawHTMLToken() {
        const div = document.createElement('DIV');
        document.getElementById('game-board-underlay').appendChild(div);
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'token');
        div.style.backgroundColor = this.owner.color;
    }

    /** 
     * Moves html token one column to left.
     */
    moveLeft() {
        if (this.columnLocation > 0) {
            console.log("left")
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation--;
        }
    }

    /** 
     * Moves html token one column to right.
     */
    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            console.log("right")
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation++;
        }
    }



}