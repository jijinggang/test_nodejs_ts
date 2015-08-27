/// <reference path="./typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap,NgFor} from 'angular2/angular2';
@Component({
  selector: 'my-app'
})
@View({
      directives: [NgFor],  
        template: `
    <h1>I am {{name}}</h1>
    <h1>Friends</h1>
    <ul>
      <li *ng-for="#name1 of names">
      {{ name1 }}
      </li>
    </ul>
    <input #addtext>
    <button (click)="addTo(addtext.value);addtext.value=''">Add Friend</button>
        `})
class MyAppComponent {
    name: string;
    names: Array<string>;
    constructor() {
        this.name = "world";  
        this.names = ["Aarav", "Martin", "Shannon", "Ariana", "Kai"];
    }
    addTo(name: string) {
    this.names.push(name);
  }
}
bootstrap(MyAppComponent); 