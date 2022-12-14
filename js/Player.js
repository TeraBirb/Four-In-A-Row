class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    createTokens(num) {
        // let array = [];
        // for (let i = 0; i < num; i++) {
        //     array.concat(new Token(i, this));
        // }
        // return array;

        const tokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    get activeToken() {
        return this.unusedTokens[0];
    }

    checkTokens() {
        return this.unusedTokens.length == 0 ? false : true;
    }
}