import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // saves the entered text
  link: string = '';

  // holds all entered links in a list
  links: string[] = [];

  constructor(public routerService: Router, public serverStatusService: ApiService,
              private snackBar: MatSnackBar) {
  }

  addLink() {
    console.log('Link: ', this.link);
    this.links.push(this.link);
    this.link = '';
  }

  deleteLink(link: string) {
    console.log('Deleted Link: ', link);
    const index = this.links.indexOf(link, 0);
    if (index !== -1) {
      this.links.splice(index, 1);
    }
  }

  showNextPage() {
    this.serverStatusService.sendServerUrlsToBackend(this.links)
      .subscribe((response) => {
        if(response.status === 201) {
          this.routerService.navigateByUrl('/monitoring');
        }
      }, error => {
        // get left side, and add one because indexOf('[') gives you the exact index of this string
        const leftParenthesisIndex = error.error.message.indexOf('[') + 1;
        const rightParenthesisIndex = error.error.message.indexOf(']');
        if( leftParenthesisIndex !== -1 && rightParenthesisIndex != -1) {
          const url = error.error.message.substring(leftParenthesisIndex , rightParenthesisIndex);
          this.snackBar.open('Diese Url [' + url + '] ist schon vorhanden. Bitte löschen.', 'OK')
        }
      });
  }
}
