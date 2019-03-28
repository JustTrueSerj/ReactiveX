import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (((value % 100) / 10).toFixed(0) === 1) {
      return 'Найдено ' + value + ' вариантов';
    }
    switch (value % 10) {
      case 1:
        return 'Найдено ' + value + ' вариант';
        break;

      case (2 || 3 || 4):
        return 'Найдено ' + value + ' варианта';
        break;

      case (5):
        return 'Найдено ' + value + ' вариантов';
        break;
    }
  }
}
