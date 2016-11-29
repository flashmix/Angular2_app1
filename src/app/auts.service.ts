import { Injectable } from '@angular/core';
import { Aut } from './auts';

@Injectable()
export class AutsService {

  auts: Aut[] = [
    {autId:1, autName: 'Вася', autDescr: 'Автор курса JavaScript' },
    {autId:2, autName: 'Петя', autDescr: 'Автор курса jQuery' },
    {autId:3, autName: 'Жора', autDescr: 'Автор курса HTML' },
    {autId:4, autName: 'Маша', autDescr: 'Автор курса CSS' },
  ];

getAuts():Aut []{
  return this.auts; 
}

constructor() {

 }

}
