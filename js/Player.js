class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = false;
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
}