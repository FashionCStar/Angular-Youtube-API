import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class RequestCore {

    constructor(
        private http: Http
    ) { }

    private extractData(res: Response) {
      return res.json();
    }

    private handleError(err: Response | any) {
      console.error(err.message || err);
      return Observable.throw(err.json() || err.message || err);
    }

    private addHeaders(): Headers {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return new Headers(headers);

    }

    get(url: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {

        const query = this.http.get(`${url}`, {
            headers: this.addHeaders(), search: params
        });

        return query.map(this.extractData).catch(this.handleError);

    }

    post(url: string, body: Object = {}): Observable<any> {

        const query = this.http.post(`${url}`, JSON.stringify(body), {
            headers: this.addHeaders()
        });

        return query.map(this.extractData).catch(this.handleError);

    }

    put(url: string, body: Object = {}): Observable<any> {

        const query = this.http.put(`${url}`, JSON.stringify(body), {
            headers: this.addHeaders()
        });

        return query.map(this.extractData).catch(this.handleError);

    }

    delete(url: string, body: Object = {}): Observable<any> {

        const query = this.http.delete(`${url}`, {
            headers: this.addHeaders()
        });

        return query.map(this.extractData).catch(this.handleError);

    }

}
