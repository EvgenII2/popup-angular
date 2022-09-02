import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IImageInfo } from 'src/app/models/models';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  images: IImageInfo[] = [];
  page: number = 1;
  currentImage: IImageInfo | undefined;
  isLoading: boolean = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(): void {
    this.isLoading = true;
    this.api.getPictures(this.page).then(
      (res) => {
        this.images = this.images.concat(res);
        this.page += 1;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        console.log(`Не удалось загрузить фото. Ошибка: ${err}`);
      }
    );
  }

  setCurrentImage(image: IImageInfo | undefined): void {
    this.currentImage = image;
  }
}
