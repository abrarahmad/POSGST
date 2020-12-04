import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Master entry',
        icon: 'pi pi-fw pi-plus',
        items: [{
          label: 'Sub-Entry-1',
          icon: 'pi pi-fw pi-bookmark'
        } ]
      },
      {
        label: 'Item master',
        icon: 'pi pi-fw pi-pencil',
        items: [{
          label: 'Item Master-1',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Items Master-2',
          icon: 'pi pi-fw pi-align-right'
        } ]
      },
      {
        label: 'Purchase',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [ {
          label: 'Display',
          icon: 'pi pi-fw pi-search',

        },
        {
          label: 'Add',
          icon: 'pi pi-fw pi-plus-circle',
        }]
      },
      {
        label: 'Store',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'DSC',
      },
      {
        label: 'Report',
        icon: 'pi pi-fw pi-chart-bar',
      },
      {
        label: 'Deal',
      },
      {
        label: 'Security', icon: 'pi pi-fw pi-cog',
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

}
