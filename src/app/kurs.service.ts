import { Injectable } from '@angular/core';
import { Kur } from './kurs';

@Injectable()
export class KursService {

kurs: Kur[] = [
  {kurId:1, kurName:'JavaScript', kurDescr:'Курсы по JavaScript'},
  {kurId:2, kurName:'jQuery', kurDescr:'Курсы по jQuery'},
  {kurId:3, kurName:'HTML', kurDescr:'Курсы по HTML'},
  {kurId:4, kurName:'CSS', kurDescr:'Курсы по CSS'},
]
  getKurs():Kur []{
    return this.kurs;
  }

constructor() {

 }

}
