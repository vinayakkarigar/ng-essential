import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharacterUpperCase'
})
export class FirstCharacterUpperCasePipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    return value.replace(/\w\S*/g, (str: string) => {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
  }

}
