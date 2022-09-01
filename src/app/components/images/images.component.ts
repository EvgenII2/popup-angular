import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  @Input() images: any[] | undefined;
  @Output() onImageClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.images);
  }

  onImageClick(ev: any) {
    this.onImageClickEvent.emit(ev);
  }
}
