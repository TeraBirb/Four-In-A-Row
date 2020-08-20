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
        const token = document.createElement('DIV');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }

    /** 
     * Moves html token one column to left.
     */
    moveLeft() {
        if (this.columnLocation > 0) {
            // debugger
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
            // debugger
            console.log("right")
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation++;
        }
    }

    /** 
    //  * Drops html token into targeted board space.
    //  * @param   {Object}   target - Targeted space for dropped token.
    //  * @param   {function} reset  - The reset function to call after the drop animation has completed.
    //  */
    drop(target, reset) {
        this.dropped = true;
        // JQuery animation
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }
}