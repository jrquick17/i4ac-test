import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

// import {AutoCompleteService} from 'ionic4-auto-complete';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SimpleService {
// export class SimpleService implements AutoCompleteService {
  labelAttribute = 'name';

  private countries:any[] = [];

  constructor(private http:HttpClient) {

  }

  getResults(keyword:string):Observable<any[]> {
    let observable:Observable<any>;

    if (this.countries.length === 0) {
      observable = this.http.get('https://restcountries.eu/rest/v2/all');
    } else {
      observable = of(this.countries);
    }

    return observable.pipe(
      map(
        (result) => {
          return result.filter(
            (item) => {
              return item.name.toLowerCase().startsWith(
                keyword.toLowerCase()
              );
            }
          );
        }
      )
    );
  }
}
