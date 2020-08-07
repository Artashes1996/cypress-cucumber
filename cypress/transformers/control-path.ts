export class ControlPath {

    private sectionName:string;
    private elementName:string;
    private static SECTION_INDEX:number=0;
    private static ELEMENT_INDEX:number=1;
    private static PATH_SPLITTER:string = '/';

    private constructor (elementPath:string){
        let elementPaths:string[] = this.splitElementPath(elementPath);
        this.sectionName = elementPaths[ControlPath.SECTION_INDEX];
        this.elementName = elementPaths[ControlPath.ELEMENT_INDEX];
    }

    public static getControlPath(elementPath:string):ControlPath{
        return new ControlPath(elementPath);
    }

    private splitElementPath(elementPaths:string):string[]{
        return elementPaths.toLowerCase().split(ControlPath.PATH_SPLITTER);
    }

    public getSection():string{
        return this.sectionName ;
    }

    public getElement():string{
        return this.elementName ;
    }
}