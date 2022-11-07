import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductService } from 'src/app/Services/static-product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  productName:any;
  totalPrice:number = 0;
  // prodList : IProduct[];
  selectedProducts: IProduct[];
  @Input() CatID : number = 0;
  @Output() totalPriceChanged : EventEmitter<number>;

  closeResult = '';

  constructor(private productService:StaticProductService,private route:Router,private modalService: NgbModal) {

   this.totalPriceChanged = new EventEmitter<number>();
    this.selectedProducts = productService.getAllProduct();
   }
  ngOnChanges(): void {
   this.selectedProducts = this.productService.getProductByCatId(this.CatID);
  }

  ngOnInit(): void {
  }

  Buy(price:number,NeededItems : any )
  {
    this.totalPrice = price * NeededItems;
    //console.log("Hello");
    this.totalPriceChanged.emit(this.totalPrice);
  }


  prdTrackBy(index:number,prd:IProduct) 
  {
    return prd.id;
  }

  Details(prodId:number)
  {
    this.route.navigate(['products/',prodId]);
  }

  open(content:any)
  {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  

  Search()
  {
    if(this.productName == "")
    {
      this.ngOnChanges();
    }
    else
    {
      this.selectedProducts = this.selectedProducts.filter(res => {
        return res.name.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());}
        )
    }
  }
}
