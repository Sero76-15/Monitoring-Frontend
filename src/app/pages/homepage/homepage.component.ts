import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ServerStatusService} from "../../services/server-status.service";

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

  constructor(public routerService: Router, public serverStatusService: ServerStatusService) {
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
    this.serverStatusService.sendServerUrlsToBackend(this.links)
      .subscribe(value => {
        console.log(value);
      });
    //this.routerService.navigateByUrl('/monitoring');
  }
}
