import { Component, OnChanges, OnInit } from '@angular/core';
import {ImageService} from "../image-detail/shared/image.service";
import { HttpClient } from '@angular/common/http';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.css'],
  providers: [ImageService]
})
export class WebProjectsComponent implements OnInit {

  model: string;
  query: string = 'forest';
  images: any[] = [];
  imagesFound: boolean = false;
  searching: boolean = false;
  p: number = 1;

  constructor(private imageService: ImageService) {
  }

  handleSucsess(data) {
    this.imagesFound = true;
    this.images = data.hits;
  }

  handleError(error) {
    console.log(error);
  }

  searchImages(query: string) {
    this.searching = true;

    return this.imageService.getImages(query).subscribe(
        data => this.handleSucsess(data),
        error => this.handleError(error),
        () => this.searching = false
    )
  }

  ngOnInit() {
    this.model = 'Web-Projects';
    this.searchImages(this.query);
  }

  ngOnDestroy() {
  }

}
