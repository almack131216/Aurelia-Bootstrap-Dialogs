import { inject } from "aurelia-framework";
import { Dialogs } from "./bootstrap/dialogs";

@inject(Dialogs)
export class App {
  message = 'Hello World!';
  
  constructor(private dialogs: Dialogs){
    
  }

  showDialog(getType) {
    alert(getType);
    if(getType=='alert') this.dialogs.showAlert("Hello world!");
    if(getType=='login') this.dialogs.showLogin("Hello Login!");
  }
}