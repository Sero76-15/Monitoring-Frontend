import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // saves the entered text
  link:string = '';

  // holds all entered links in a list
  links: string[] = [];

  constructor() {
  }

  checkIfIsLink(value:string) {
    console.log('value: ', value);

  }

  addLink() {
    console.log('Link: ', this.link);
    this.links.push(this.link);
  }
}
