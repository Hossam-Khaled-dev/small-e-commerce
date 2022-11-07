import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {

 private prodList : IProduct[];
  
  constructor() { 
    this.prodList = [{id:100,name:'Iphone 14',image:'https://fakeimg.pl/250x100/ff0000/',quantity:50,price:1000,categoryId:1},
    {id:200,name:'Samsung S22 Ultra',image:'https://fakeimg.pl/250x100/ff0000/',quantity:70,price:900,categoryId:1},
    {id:300,name:'Lenovo ThinkPad',image:'https://fakeimg.pl/250x100/ff0000/',quantity:35,price:1500,categoryId:2},
    {id:400,name:'Apple Mac Air Pro',image:'https://fakeimg.pl/250x100/ff0000/',quantity:20,price:3000,categoryId:2},
    {id:500,name:'Coffee Machine',image:'https://fakeimg.pl/250x100/ff0000/',quantity:17,price:600,categoryId:3},
    {id:600,name:'Air Frier',image:'https://fakeimg.pl/250x100/ff0000/',quantity:10,price:750,categoryId:3},
    {id:700,name:'Citizen Watch',image:'https://fakeimg.pl/250x100/ff0000/',quantity:0,price:4000,categoryId:4},
    {id:800,name:'Bently For Men Perfume',image:'https://fakeimg.pl/250x100/ff0000/',quantity:5,price:30,categoryId:4}]
  }

  getAllProduct() : IProduct[]
  {
    return this.prodList;
  }

  getProductById(id: number) : IProduct | null
  {
    var product = this.prodList.find(p => p.id == id);
    if(product != null)
      return product
    else
      return null;
  }

  getProductByCatId(catId : Number) : IProduct[]
  {
    if(catId == 0)
      return this.prodList;
    else
    return this.prodList.filter(c => c.categoryId == catId);
  }

  getProductIDs():number[]
  {
    return this.prodList.map(p => p.id);
  }
}
