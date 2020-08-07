export class Control {

    private controlLocator: string;

    public constructor(controlLocator: string) {
        this.controlLocator = controlLocator;
    }

    public getLocator(): string {
        debugger
        return this.controlLocator;
    }

}