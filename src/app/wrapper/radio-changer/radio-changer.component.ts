import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';
import {select, Store} from '@ngrx/store';
import {ALL, VideoFilterByRadioChangerAction, VideoSearchAction} from '../../ngrx/actions/result.action';

@Component({
  selector: 'app-radio-changer',
  templateUrl: './radio-changer.component.html',
  styleUrls: [`./radio-changer.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioChangerComponent implements OnInit {
  constructor(private communicateService: CommunicateService, private store: Store) {
  }

  // videos$ = this.store.pipe(select('videos'));

  ngOnInit() {
    this.communicateService.sendValue('не выбрана');
  }

  onSelectOption(value: string) {
    this.communicateService.sendValue(value);
    this.store.dispatch(new VideoFilterByRadioChangerAction(value));
    // this.store.dispatch(new VideoSearchAction(value));
    // this.videos$.subscribe(x => console.log(x));
  }
}
