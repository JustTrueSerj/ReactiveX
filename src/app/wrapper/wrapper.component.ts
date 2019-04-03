import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommunicateService} from '../shared/communicate.service';
import {Observable} from 'rxjs';

@Component({
  selector: `app-wrapper`,
  templateUrl: `./wrapper.component.html`,
  styleUrls: [`./wrapper.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent implements OnInit {
  radioSelector: Observable<string>;

  constructor(private communicateService: CommunicateService) {
  }

  ngOnInit() {
    this.radioSelector = this.communicateService.radioValue$;
  }
}

