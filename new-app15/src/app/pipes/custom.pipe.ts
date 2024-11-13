import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [a,b] = args;
    return value+a+b;
    // return Math.pow(value,a);
  }

}
