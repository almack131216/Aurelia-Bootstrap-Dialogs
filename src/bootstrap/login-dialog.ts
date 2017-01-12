import { inject, bindable } from "aurelia-framework";
import { DialogBase } from "./dialog-base";

@inject(Element)
export class LoginDialog extends DialogBase {
    @bindable
    message;
    
    activated(params: { message: string }) {
        this.message = params.message; 
    }
}