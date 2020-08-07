import {ControlPath} from "./control-path";
import {Control} from "./control";


export class ControlPathTransformer {

    private static ControlLocator: string;

    public static getControl(umElement: string, path: any): Control {
        let umControlElementPath: ControlPath = ControlPath.getControlPath(umElement);
        ControlPathTransformer.ControlLocator = path[umControlElementPath.getSection()][umControlElementPath.getElement()].locator;
        return new Control(ControlPathTransformer.ControlLocator);
    }
}