import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Branch } from 'src/app/Models/branch';
import { AdsPromotionService } from 'src/app/Services/ads-promotion.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  b1: Branch;
  imageState:boolean = true;
  private sub!:Subscription;
  constructor(private Adsprom:AdsPromotionService) { 
    this.b1 = new Branch('Iti Store','https://fakeimg.pl/300/',['cairo','alex','mansoura']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.Adsprom.getScheduledAds(2).subscribe((res) => 
    {
      console.log(res);
    })
  }

  hideImage()
  {
    this.imageState = !this.imageState;
  }

}
