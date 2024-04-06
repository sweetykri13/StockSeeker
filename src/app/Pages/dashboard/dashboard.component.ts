import { Component } from '@angular/core';

import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dataSource = [
    { company: 'Company A', marketPrice: 100, closePrice: 95, marketCap: 100000 ,trend:"1"},
    { company: 'B', marketPrice: 150, closePrice: 140, marketCap: 200000 ,trend:"2"},
    { company: 'C', marketPrice: 80, closePrice: 85, marketCap: 80000,trend:"3" },
    { company: 'D', marketPrice: 120, closePrice: 125, marketCap: 150000 ,trend:"4"}
  ];
  filteredData = this.dataSource;
  searchItem(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    console.log(searchValue, 'SEARCH VALUE')
    this.filteredData = this.dataSource.filter(item => 
      item.company.toLowerCase().includes(searchValue)
    );
    console.log(this.filteredData, 'FILTERED DATA')
  }
   sortData() {
    /* const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'company': return compare(a.id, b.id, isAsc);
        case 'marketPrice': return compare(a.name, b.name, isAsc);
        case 'closePrice': return compare(a.email, b.email, isAsc);
        default: return 0;
      }
    }); */
  } 
}

