import './polyfills';

import {
  ChangeDetectionStrategy,
  Component,
  importProvidersFrom,
} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(
        ({ HomeComponent }) => HomeComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('././components/about/about.component').then(
        ({ AboutComponent }) => AboutComponent
      ),
  },
  {
    path: 'fetchAPI',
    loadComponent: () =>
      import('././components/app/app.component').then(
        ({ AppComponent }) => AppComponent
      ),
  },
  { path: '**', redirectTo: '' },
] as Routes;

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    // import standalone Components, Directives and Pipes
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    NgFor,

    // or NgModules like Angular Material
  ],
  template: `
    <mat-toolbar class="toolbar" >
      <button mat-icon-button aria-label="Toggle menu" (click)="toggleMatSidenav()">
        <mat-icon >menu</mat-icon>
      </button>
      <span>Angular14 stand alone components</span>
    </mat-toolbar>
    <mat-sidenav-container class="container" >
      <mat-sidenav [(opened)]="matSidenavOpened" fixedTopGap="64" fixedInViewport>

        <mat-nav-list>
          <a mat-list-item routerLink="/">Home</a>
          <a mat-list-item routerLink="/about">About</a>
          <a mat-list-item routerLink="/fetchAPI">App</a>
          <a mat-list-item href="" target="_blank">External Link</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content class="content">
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .toolbar {
        position: fixed;
        z-index: 2;
        display: flex;
      }

      .toolbar > button {
        color: #fff;
      }

      .toolbar > span {
        margin-left: 16px;
      }

      .container {
        flex: 1 auto;
      }

      .content {
        flex: 1 auto;
        display: flex;
        flex-direction: column;
        color: #000;
        background: #ededed;
      }

      main {
        margin-top: 64px;
        flex: 1 auto;
      }
    `,
  ],
})
export class AppComponent {
  matSidenavOpened = false;
  name = 'Leo Lanese';

  toggleMatSidenav(): void {
    this.matSidenavOpened = !this.matSidenavOpened;
  }
}

// Environment injectors
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
    ]),
  ],
})
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  // Otherwise, log the boot error
  .catch((err) => console.error(err));
