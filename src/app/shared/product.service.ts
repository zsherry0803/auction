import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "First product", 35, 3.5, "The first product on sherry's first SPA", ["books"]),
    new Product(2, "Second product", 100, 3.6, "The second product on sherry's first SPA", ["sports", "outdoor"]),
    new Product(3, "Third product", 22, 4.4, "The third product on sherry's first SPA", ["food"]),
    new Product(4, "Fourth product", 33, 3.3, "The fourth product on sherry's first SPA", ["video", "movie"]),
    new Product(5, "Fifth product", 44, 3.6, "The fifth product on sherry's first SPA", ["tools"]),
    new Product(6, "Sixth product", 55, 3.0, "The sixth product on sherry's first SPA", ["books"],)
  ]

  private comments:Comment[] = [
    new Comment(1, 1, "2018/08/20", "kevin", 3.0, "not bad."),
    new Comment(2, 1, "2018/08/21", "tony", 4.0, "pretty good"),
    new Comment(3, 1, "2018/08/22", "david", 5.0, "excellent"),
    new Comment(4, 2, "2018/08/22", "jenny", 4.0, "looks good"),
  ]
  

  constructor() { }

  getProducts() : Product[] {
    return this.products;
  }

  getProduct(id:number) : Product{
    return this.products.find(((product) => product.id == id));
  }

  getCommentsForProductId(id:number) : Comment[] {
    return this.comments.filter((comment:Comment) => comment.productId == id);
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

export class Comment{
  
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}


