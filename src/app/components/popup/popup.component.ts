import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IImageInfo } from 'src/app/models/models';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() image: IImageInfo | undefined;
  @Output() closePopup: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor() {}

  ngOnInit(): void {}

  onClick(ev: Event) {
    this.closePopup.emit(undefined);
  }
}
