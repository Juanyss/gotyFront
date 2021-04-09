import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class GotyService {

  private url: string = `http://localhost:88`;
  private gotyUrl: string = `${this.url}/api/goty`

  constructor(private http: HttpClient) { }

  getGoty(){
    return this.http.get(`${this.gotyUrl}`)
  }

  voteGame(id:number){
    return this.http.post(`${this.gotyUrl}/${id}`,{})
  }
}
