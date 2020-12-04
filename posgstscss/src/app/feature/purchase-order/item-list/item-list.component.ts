import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any[] = [];
  loading: boolean = true;
  displayAddItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAddItem() {
    this.displayAddItem = true;
  }

}
