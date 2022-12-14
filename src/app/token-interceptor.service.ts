import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("id_token");

    if(idToken)
    {
      const cloned = req.clone({
        headers: req.headers.set("Authorization","Bearer " + idToken)
      });
      return next.handle(cloned);
    }
    else
    {
      return next.handle(req);
    }
  }
  

  // intercept(req, next)
  // {
  //   let tokenizedReq = req.clone({

  //     setHeaders:{
  //       Authorization:'Bearer xx.yy.zz'
  //     }
  //   })
  //   return next.handle(tokenizedReq);
  // }
}
