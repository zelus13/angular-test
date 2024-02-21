import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  intialProductList: any = [
    {
      id: 1,
      title: "product 1",
      image: "vit-c.jpg",
      link: "/product-1",
      tags: "beauty"
    },
    {
      id: 2,
      title: "product 2",
      image: "vit-c.jpg",
      link: "/product-2",
      tags: "tools"
    },
    {
      id: 3,
      title: "product 3",
      image: "vit-c.jpg",
      link: "/product-3",
      tags: "entertainment"
    },
    {
      id: 4,
      title: "product 4",
      image: "vit-c.jpg",
      link: "/product-4",
      tags: "gadget"
    },
    {
      id: 5,
      title: "product 5",
      image: "vit-c.jpg",
      link: "/product-5",
      tags: "beauty"
    }
  ];

  filteredProductList:any = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredProductList = this.intialProductList;
  }

  filterArrayProduct(event: any) {
    let val = event;

    // this.intialProductList.filter((val) => {
      // return this.productList.includes(val)
    // })

    console.log(val);
    
  }


}
