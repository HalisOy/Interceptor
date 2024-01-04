import { Injectable } from '@angular/core';
import { LogInterceptor } from '../interceptors/log-interceptor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn:'root'
})

export class UserService {
  constructor(private httpClient: HttpClient, private logInterceptor: LogInterceptor) {}

  getAll():Observable<User[]>{
    this.logInterceptor.test="deneme"
    this.logInterceptor.intercept()
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getAll2():Observable<User[]>{
    this.logInterceptor.methodClone(()=>{this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')})
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
