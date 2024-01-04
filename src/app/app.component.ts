import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TestComponent } from '../components/test/test.component';
import { LogInterceptor } from '../interceptors/log-interceptor';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TestInterceptor';
  constructor(private userService:UserService) {}

  // @LoggingInterceptorOnBefore("on before")
  // @LoggingInterceptorOnSuccess("dosya döndürüldü")
  // @LoggingInterceptorOnAfter("on after")

  // OnBefore(mesaj:string)

  
  getAll() {
    return this.userService.getAll().subscribe(res=>{
      console.log(res);
    })
  }

  
  uploadImage(){
    console.log("Image Yüklenmekte");
  }

  // @LoggingInterceptorOnSuccess("resim yüklendi")
  // 
}
