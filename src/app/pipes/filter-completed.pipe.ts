import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompleted'
})
export class FilterCompletedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
