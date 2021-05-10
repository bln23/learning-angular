export class Film {
/*   Esto se podria hacer igual como lo tenemos abajo en la parte sin comentar  

    public title: string;
    public year: number;
    public image: string;

    constructor(title: string, year: number, image: string){
        this.title = title;
        this.year = year;
        this.image = image;
    } */

    constructor(
        public title: string,
        public year: number,
        public image: string
    ){ }
}