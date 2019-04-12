import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pages',
  template: `
    <app-nav></app-nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 p-0 ">
          <app-side-menu></app-side-menu>
        </div>
        <div class="col-md-10 mt-2">
          <nav aria-label="breadcrumb">
            <!-- breadcrumb -->
            <div class="col">
              <ol class="breadcrumb">
                <ng-container *ngIf="count == null">
                  <li class="breadcrumb-item"><i class="material-icons">home</i></li>
                </ng-container>

                <ng-container *ngIf="count != null">
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0)" [routerLink]="['/']">
                      <i class="material-icons">home</i></a>
                  </li>
                </ng-container>

                <ng-container *ngFor="let breadLink of breadcrumbList">
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0)" [routerLink]="breadcrumbList[2]">
                      {{breadLink}}
                    </a>
                  </li>
                </ng-container>
              </ol>
            </div>
          </nav>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  route: string;
  breadcrumbList: Array<any>;
  routeLinks: number;
  count: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location) {

    this.router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
        this.breadcrumbList = this.route.split('/');
        this.count = this.breadcrumbList.length;
      } else {
        this.route = 'Home';
      }
      this.breadcrumbList.splice(0, 1);
    });

  }

  ngOnInit() {
    // this.getBreadcrumb();
  }

}


