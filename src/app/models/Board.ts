
export class Board {
    id: number;
    title: string;
    thumb: string; // the url of the the board background image.
    lenght: number; // the size of board's content.
    ordre: number | 3; // the personalized order of a bord in the list.
    color: string; // background-color of the board if (thumb == null).


    constructor(title: string) {
        this.title = title;
    }

    toString(): string {
        return 'title :' + this.title;
    }

}
