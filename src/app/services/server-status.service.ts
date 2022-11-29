import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Server} from "../models/server-model";

const BASE_API_PATH = 'localhost:4200/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {

  constructor(public http: HttpClient) { }

  getAllServerStatus(links: Server []) {
    return this.http.get(BASE_API_PATH + '/servers');
  }

  sendServerUrlsToBackend(links: string []) {
    return this.http.post(BASE_API_PATH + '/server-list', links);
  }
}
