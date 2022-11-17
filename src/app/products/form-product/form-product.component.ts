import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product:Product;
  public id:number;
  public action:string;

  constructor(private productService:ProductService,
    private route: Router, private path :ActivatedRoute) { }

  ngOnInit(): void {
    //this.product= new Product()
    //this.product = this.productService.listProduct.filter((product)=> product.id ==this.id)[0]
    let id = this.path.snapshot.params["id"]
    if (id!=null){
      //update  
      this.action = 'Update';
      this.productService.getProductById(id).subscribe(
        (data:Product)=>(this.product=data)
      )
    }else{
      //add
      this.action = 'Add new'
      this.product = new Product()
    }
  }
  saveProduct(){
    //this.product.nbrLike=0;

    if(this.action == 'Update'){
      this.productService.updateProduct(this.product).subscribe(
        ()=>this.route.navigate(['product/list']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      );
    }else{
      this.productService.addProduct(this.product).subscribe(
        ()=>this.route.navigate(['product/list']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}}
      );
      
    }
  }

}
