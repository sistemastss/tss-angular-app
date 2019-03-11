import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsLimiter'
})
export class WordsLimiterPipe implements PipeTransform {

  transform(value: string, limit: string): string {
    // @ts-ignore
    const delimiter = parseInt(limit);
    // @ts-ignore
    return value.length > limit ? value.substring(0, delimiter) + '...' : value;
  }

}
