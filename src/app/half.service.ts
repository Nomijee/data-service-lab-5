import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HalfService {

  constructor() { }

getHalf(mynum:number):number{
  return mynum/2;

}
}
