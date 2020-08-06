import { Injectable } from '@angular/core';
import { RequestCore as Request } from '../core';
import { environment } from '../../../environments/environment.prod';
import { Video } from '../models';
import { Observable } from 'rxjs/Rx';
import { MostPopular } from '../models/most-popular.model';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class YoutubeService {

  constructor (
    private req: Request
  ) {}

  popularMusics(limit: Number): Observable<{items: Video[]}> {

    limit = limit || 8;

    const opts: MostPopular = {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: limit,
      videoCategoryId: 10,
      regionCode: 'BR',
      key: `${environment.token}`
    };

    const params: URLSearchParams = new URLSearchParams();

    Object.keys(opts).forEach((key) => {
      params.set(key, opts[key]);
    });

    return this.req.get(`${environment.api}`, params).map((data) => data);

  }

}
