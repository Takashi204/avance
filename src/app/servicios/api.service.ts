import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };


  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //crear 
  createPosts(Post: any): Observable<any> {
    return this.http.post(this.apiURL + "/posts", Post, this.httpOptions).pipe(
      retry(3)
    );
  }

  //eliminar
  deletePost(id: any): Observable<any> {
    return this.http.delete(this.apiURL + "/posts/" + id).pipe(
      retry(3)
    );
  }


  //actualizar
  updatePost(id: any, post: any): Observable<any> {
    return this.http.put(this.apiURL + "/posts/" + id, post, this.httpOptions).pipe(
      retry(3)
    );
  }


  //List All
  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + "/posts").pipe(
      retry(3)
    );
  }

  //Get one Object
  getPost(ID: any): Observable<any> {
    return this.http.get(this.apiURL + "/posts/" + ID).pipe(
      retry(3)
    )
  }

}
