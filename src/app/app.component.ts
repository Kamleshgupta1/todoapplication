import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public addMe:string;
  public errortext:string;
  product = ["clothes", "shoes", "fruits"];
  
  addItem() {
        this.errortext = "";
        if (!this.addMe) {return;}
        if (this.product.indexOf(this.addMe) == -1) {
            this.product.push(this.addMe);
        } else {
            this.errortext = "The item is already in your list.";
        }
    }
	
  removeItem(x){
        this.errortext = "";    
        this.product.splice(x, 1);
    }
}
