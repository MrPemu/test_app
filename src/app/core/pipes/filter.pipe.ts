import { Pipe, PipeTransform } from '@angular/core';
import { IRandomImageText } from 'src/app/core/interfaces/irandom-image-text';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array1084: IRandomImageText[], filterText: any): any {
    
    if ( filterText == '' ) {
      return array1084;
    }

    return array1084.filter( item => {
      return (item.id.toString().includes( filterText ) || item.text.toString().includes( filterText ))
    })
  }
}