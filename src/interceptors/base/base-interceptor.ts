export abstract class BaseInterceptor {
    onBefore(data:string){

    }
    onSuccess(){

    }
    onError(){

    }
    onFinal(){

    }

    intercept(){
        this.onBefore("");
        try{
            this.methodClone(this.onFinal());
            this.onSuccess();
        }catch(ex){
            this.onError();
        }
        this.onFinal();
    }

    methodClone(deneme:any){
    }
}