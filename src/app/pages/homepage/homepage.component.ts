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

  addLink() {
    console.log('Link: ', this.link);
    this.links.push(this.link);
    this.link = '';
  }

  deleteLink(link:string){
    console.log('Deleted Link: ', link);
    const index = this.links.indexOf(link, 0);
    if(index !== -1) {
      this.links.splice(index, 1);
    }
  }

  showNextPage() {

  }
}
