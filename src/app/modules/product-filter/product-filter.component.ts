import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  @Output() filterProduct = new EventEmitter();

  productFilter = [
    { id: 1, value: 'beauty' },
    { id: 2, value: 'tools' },
    { id: 3, value: 'entertainment' },
    { id: 4, value: 'gadget' },
  ];

  filterForm!: FormGroup;
  filterArray: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contructFilterForm();
  }

  contructFilterForm() {
    this.filterForm = this.fb.group({
      filter: new FormControl(false),
    });
  }

  checkFilter(event: any, item: any) {
    if (event.target.checked) {
      this.filterArray.push(item.value);
    } else {
      let prodId = this.filterArray.find(x => x.id == item.id);
      this.filterArray.splice(this.filterArray.indexOf(prodId));
    }
    console.log(this.filterArray);
    this.filterProduct.emit(this.filterArray);
  }
}
