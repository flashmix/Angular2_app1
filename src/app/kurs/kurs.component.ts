import { Component, OnInit } from '@angular/core';
import {KursService} from '../kurs.service';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css'],
  providers: [KursService]
})
export class KursComponent implements OnInit {

kurs = this.kc.getKurs();
 
  constructor(
    private kc: KursService
  ) { }

 
 ngOnInit() {
  }

}
