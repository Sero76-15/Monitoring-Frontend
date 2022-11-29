import {Component, OnInit} from '@angular/core';
import {Link} from "../../models/server-model";

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'url', 'status'];

  dataSource!: Link[];

  constructor() {
  }

  ngOnInit(): void {
    // daten laden
  }
}
