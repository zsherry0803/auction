import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "First product", 35, 3.5, "The first product on sherry's first SPA", ["books"]),
      new Product(2, "Second product", 100, 3.6, "The second product on sherry's first SPA", ["sports", "outdoor"]),
      new Product(3, "Third product", 22, 4.4, "The third product on sherry's first SPA", ["food"]),
      new Product(4, "Fourth product", 33, 3.3, "The fourth product on sherry's first SPA", ["video", "movie"]),
      new Product(5, "Fifth product", 44, 3.6, "The fifth product on sherry's first SPA", ["tools"]),
      new Product(6, "Sixth product", 55, 3.0, "The sixth product on sherry's first SPA", ["books"],)
    ]
  }

}

export class Product{
  
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}
