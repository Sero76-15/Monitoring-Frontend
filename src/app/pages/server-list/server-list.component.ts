import {Component, OnInit} from '@angular/core';
import {Server} from "../../models/server-model";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'url', 'serverStatus'];

  dataSource!: Server[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllServerStatus().subscribe(servers => {
      if (servers) {
        this.dataSource = servers;
      }
    });
  }
}
