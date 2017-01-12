import { inject } from "aurelia-framework";
import { DialogService } from "./dialog-service";
import { AlertDialog } from "./alert-dialog";
import { LoginDialog } from "./login-dialog";

@inject(DialogService)
export class Dialogs {  
    constructor(private dialogService: DialogService) {
        
    }
    
    showAlert(message: string) {
        return this.dialogService.show<AlertDialog>("bootstrap/alert-dialog", { message: message });
    }

    showLogin(message: string) {
        return this.dialogService.show<LoginDialog>("bootstrap/login-dialog", { message: message });
    }
}