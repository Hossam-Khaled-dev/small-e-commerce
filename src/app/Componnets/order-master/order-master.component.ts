import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';



@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  Catlist : ICategory[];
  SelectedCategoryId:number = 0;
  RtotalPrice:number=0;
  @ViewChild('UserName') selectedUserName!: ElementRef
  @ViewChild(ProductListComponent) prodList!: ProductListComponent

  // constructor(private toastrService:ToastrService) {
  constructor() {


    this.Catlist = [{id:1,name:'Mobile Phones'},
    {id:2,name:'Labtops'},
    {id:3,name:'Electronics'},
    {id:4,name:'Accessories'}];
   }
  ngAfterViewInit(): void {
    this.selectedUserName.nativeElement.value = "Your name please";
    this.selectedUserName.nativeElement.style.border = "2px solid red";
  }

  ngOnInit(): void {
  }


  onTotalPriceChanged(price: any)
  {
    this.RtotalPrice += price;
    //console.log("Hello 2");
  }
 
  UpdateQuantity()
  {
    this.prodList.selectedProducts[0].quantity-=1;
  }

  // Toastr()
  // {
  //   this.toastrService.success('Testing message','Title')
  // }
}
