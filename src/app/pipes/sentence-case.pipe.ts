import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
  standalone: true
})

export class SentenceCasePipe implements PipeTransform {

  transform(value: string): string {
    let res: string = '';
    if(value.split(' ').length) {
      res = value.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
    }
    return res;
  }

}
