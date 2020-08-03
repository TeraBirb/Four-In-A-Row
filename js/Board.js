class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        let spaces = [];

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let space = new Space(i, j);
                spaces.push(space);
            }
        }

        return spaces;

        // const spaces = [];
        //
        // for (let y = 0; y < this.columns) {
        //     const column = [];
        //     for (let x = 0; x < this.rows; x++) {
        //         const space = new Space(x, y);
        //         column.push(space);
        //     }
        //     spaces.push(column);
        // }
        //
        // return spaces;
    }
}