import { Injectable } from '@angular/core';
import { IImageInfo } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(){}

  private checkResponse<T>(res: any): Promise<T> {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getPictures(page: number = 1, limit: number = 10): Promise<IImageInfo[]> {
    return fetch(`https://picsum.photos/v2/list?page=${page};limit=${limit}`, {
      headers: new Headers({
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'application/json',
        'Content-Type': 'text/html',
      }),
    }).then((response) => {
      return this.checkResponse(response);
    });
  }

  getPictureInfo(id: number = 0): Promise<IImageInfo> {
    return fetch(`https://picsum.photos/id/${id}/info`).then((response) => {
      return this.checkResponse(response);
    });
  }

  getCropImage(src: string, size: number = 2): string {
    const [domain, key, id, width, height] = src.split('/').splice(2);
    const newWidth = Math.floor(+width / size);
    const newHeight = Math.floor(+height / size);

    return `https://${domain}/${key}/${id}/${newWidth}/${newHeight}`;
  }
}
