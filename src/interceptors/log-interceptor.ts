import { Injectable } from "@angular/core";
import { BaseInterceptor } from "./base/base-interceptor";

@Injectable({
    providedIn:'root'
})
export class LogInterceptor extends BaseInterceptor {
    test!:string
    
    override methodClone(deneme:any): void {
        deneme
    }
    override onBefore(): void {
        console.log(this.test)
    }
    override onSuccess(): void {
        console.log("kullanıcı eklendi")
    }
    override onError(): void {
        console.log("Kullanıcı hata verdi")
    }
}