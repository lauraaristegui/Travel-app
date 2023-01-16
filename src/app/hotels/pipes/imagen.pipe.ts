import { Pipe, PipeTransform } from '@angular/core';
import { ListHotels } from '../interfaces/hotels.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hotel: ListHotels): string {
    return `assets/hoteles/${hotel.id}.jpeg`;
  }

}
