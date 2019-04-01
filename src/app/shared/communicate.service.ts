import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  private radioSource$ = new Subject<string>();
  radioValue$ = this.radioSource$.asObservable();

  sendValue(value: string) {
    this.radioSource$.next(value);
  }
}
