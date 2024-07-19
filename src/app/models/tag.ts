export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('Typescript','darkred');
    static readonly JAVASCRIPT = new Tag('Javascript','brown');
    static readonly HTML = new Tag('HTML','purple');
    static readonly CSS = new Tag('CSS','green');

    private constructor(private readonly key: string, public readonly color:string){

    }

    toString(){
        return this.key
    }
}