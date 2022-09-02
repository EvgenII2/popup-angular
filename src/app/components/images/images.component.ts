import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IImageInfo } from 'src/app/models/models';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  @Input() images: IImageInfo[] | undefined;
  @Output() onImageClickEmitter: EventEmitter<IImageInfo> =
    new EventEmitter<IImageInfo>();

  constructor() {}

  ngOnInit(): void {}

  onImageClick(image: IImageInfo): void {
    this.onImageClickEmitter.emit(image);
  }
}
