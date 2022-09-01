import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  images = [];
  page = 1;
  currentImage = null;
  isLoading = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage() {
    this.isLoading = true;
    this.api.getPictures(this.page).then((res) => {
      this.images = this.images.concat(res);
      this.page += 1;
      this.isLoading = false;
      console.log(res);
    });
  }

  setCurrentImage(image: any) {
    this.currentImage = image;
  }
}
