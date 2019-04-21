import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';
import {Store} from '@ngrx/store';
import {VideoFilterByRadioChangerAction} from '../../ngrx/actions/result.action';

@Component({
  selector: 'app-radio-changer',
  templateUrl: './radio-changer.component.html',
  styleUrls: [`./radio-changer.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioChangerComponent implements OnInit {
  constructor(private communicateService: CommunicateService, private store: Store) {
  }

  ngOnInit() {
  }

  onSelectOption(value: string) {
     this.store.dispatch(new VideoFilterByRadioChangerAction(value));
  }
}
