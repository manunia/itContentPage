import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-apps',
  templateUrl: './mobile-apps.component.html',
  styleUrls: ['./mobile-apps.component.css']
})
export class MobileAppsComponent implements OnInit {

  model: string;

  constructor() { }

  ngOnInit() {
    this.model = 'Mobile Applications'
  }

}
