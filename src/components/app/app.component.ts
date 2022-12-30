import { NgFor, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Data } from '../../interfaces/data';
import { ApiService } from '../../services/api.service';

// // JIC: NullInjectorError: No provider for ...
// @NgModule({
//   providers: [{ provide: ApiService, useClass: ApiService }],
// })
// class MyNgModuleWithProvider {}

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule],
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
  <ul>
    <li *ngFor="let data of data$ | async">
       <span>{{ data.title }}</span>
    </li>
  </ul>
`,
})
export class AppComponent implements OnInit {
  data$: Observable<Data[]> = this.service.data$;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getAllReports();
  }

  getAllReports(): void {
    let resp = this.service.getAlbums();
    console.log('resp', resp);
  }
}
