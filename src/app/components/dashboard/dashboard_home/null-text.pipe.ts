import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullText'
})
export class NullTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if(value===null || value===0)
    {
        return 0;
    }
    return value;
  }

}
