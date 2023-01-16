
export class HotelModelList{

    constructor(
      public  name: string,
      public  id: string,
       public availability: boolean,
       public price: string,
       public image: string,
       public description: string
    ) {}
}