import {Component, OnInit} from '@angular/core';
import {CommunicateService} from '../../shared/communicate.service';

@Component({
  selector: 'app-radio-changer',
  templateUrl: './radio-changer.component.html',
  styleUrls: [`./radio-changer.component.scss`]
})
export class RadioChangerComponent implements OnInit {
  constructor(private communicateService: CommunicateService) {
  }

  ngOnInit() {
    this.communicateService.sendValue('All');
  }

  onSelectOption(value: string) {
    this.communicateService.sendValue(value);
  }
}
