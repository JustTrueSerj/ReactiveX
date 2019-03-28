import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const [one, few, many] = ['вариант', 'варианта', 'вариантов'];
    const byTen = value % 10;
    const byHundred = value % 100;

    if (byHundred >= 11 || byHundred >= 20) {
      return `Найдено ${value} ${many}`;
    }

    let option = many;

    switch (byTen) {
      case 1:
        option = one;
        break;
      case 2:
      case 3:
      case 4:
        option = few;
        break;
      default:
        break;
    }

    return `Найдено ${value} ${option}`;
  }
}
