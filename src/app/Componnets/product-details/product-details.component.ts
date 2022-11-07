import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductService } from 'src/app/Services/static-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productId: number=0;
currentIndex:number = 0;
productsIDs: number [] = [];
selectedProduct: IProduct | null = null;
  constructor(private prodService:StaticProductService,
              private routeActive: ActivatedRoute,
              private location:Location,
              private route:Router) {
    
    
   }

  ngOnInit(): void {
    //this.productId = Number(this.routeActive.snapshot.paramMap.get('id'));
    
    this.routeActive.paramMap.subscribe((res) => {
      this.productId = Number( res.get('id'));
      this.selectedProduct = this.prodService.getProductById(this.productId);
    })

    this.productsIDs = this.prodService.getProductIDs();
    console.log(this.selectedProduct);
  }

  // BackToList()
  // {
  //   this.location.back();
  // }

    BackToList()
  {
    this.route.navigate(['products']);
  }


  Previous()
  {
    this.currentIndex = this.productsIDs.findIndex((elem) => elem == this.productId);
    if(this.currentIndex > 0)
        {
          let currentId = this.productsIDs[this.currentIndex - 1];
          this.route.navigate(['products',currentId]);
        }

  }

  Next()
  {
    this.currentIndex = this.productsIDs.findIndex((elem) => elem == this.productId);
    if(this.currentIndex < this.productsIDs.length-1)
    {
      let currentId = this.productsIDs[this.currentIndex + 1];
      this.route.navigate(['products',currentId]);
    }
  }
}
