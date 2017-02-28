import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
@Injectable()
export class ReversePipe {
  
  transform(value, args) {
    return value.split("").reverse().join("");
  }
}
