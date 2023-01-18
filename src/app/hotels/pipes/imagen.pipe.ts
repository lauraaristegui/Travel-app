import { Pipe, PipeTransform } from '@angular/core';
import { ListHotels } from '../../models/hotels.model';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hotel: ListHotels): string {
    return `assets/hoteles/${hotel.id}.jpeg`;
  }

}
