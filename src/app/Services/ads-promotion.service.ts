import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsPromotionService {
Ads:string[] ;
  constructor() { 
    this.Ads = ['First Ad',
                'Second Ad',
                'Third Ad',
                //' ',
                'Forth Ad',
                'Fifth Ad'
  ]
  }

  getScheduledAds(intervalInSeconds:number):Observable<string>
  {
    
    return new Observable((observer) => {
      let counter = 0;

      let adsTimer = setInterval(() => {
        if(counter == this.Ads.length)
      {
        observer.complete();
      }
      if(this.Ads[counter] == ' ')
      {
        observer.error("Error: Empty Add");
      }
      observer.next(this.Ads[counter]);
      counter++;
      
      },intervalInSeconds*1000);

      return {
        unsubscribe(){
          clearInterval(adsTimer);
          console.log("Observable unsubscribe");
        }
      }

    })


  }
}
