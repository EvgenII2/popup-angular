import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() image: any | undefined;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  onClick(event: any) {
    event.preventDefault();
    this.onClickEvent.emit(this.image);
  }

  getURL(src: string, size: number) {
    return this.api.getCropImage(src, size);
  }
}
