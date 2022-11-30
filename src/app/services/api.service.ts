import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Server} from "../models/server-model";

const BASE_API_PATH = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {
  }

  getAllServerStatus() {
    return this.http.get<Server[]>(BASE_API_PATH + '/servers');
  }

  sendServerUrlsToBackend(links: string []) {
    return this.http.post(BASE_API_PATH + '/server-list', links, {observe: 'response'});
  }
}
