import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply-detail',
  templateUrl: './supply-detail.component.html',
  styleUrls: ['./supply-detail.component.scss']
})
export class SupplyDetailComponent implements OnInit {

  list: any[] = [];
  checked: boolean = false;

  constructor() {

    this.list = [
      { name: 'Supplier-Australia', code: 'AU' },
      { name: 'Supplier-Brazil', code: 'BR' },
      { name: 'Supplier-China', code: 'CN' },
      { name: 'Supplier-Egypt', code: 'EG' },
      { name: 'Supplier-France', code: 'FR' },
      { name: 'Supplier-Germany', code: 'DE' },
      { name: 'Supplier-India', code: 'IN' },
      { name: 'Supplier-Japan', code: 'JP' },
      { name: 'Supplier-Spain', code: 'ES' },
      { name: 'Supplier-US', code: 'US' }
    ];
  }

  ngOnInit(): void {
  }

}
