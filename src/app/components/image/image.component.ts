import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IImageInfo } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() image: IImageInfo | undefined;
  @Output() onClickEvent: EventEmitter<IImageInfo> =
    new EventEmitter<IImageInfo>();

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  onClick(event: Event): void {
    event.preventDefault();
    this.onClickEvent.emit(this.image);
  }

  getURL(src: string | undefined, size: number): string {
    if (src) return this.api.getCropImage(src, size);
    else return '#';
  }
}
