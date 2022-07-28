import { Newable } from '../shared-service/newable';

export class DtoUtil {
  
  public static createDtos<T>(data: { [key: string]: any }[], Entity: Newable<T>): T[] {
    const dtosArr: any[] = [];
    data.forEach((dto) => {
      dtosArr.push(new Entity(dto));
    });
    return dtosArr;
  }

}