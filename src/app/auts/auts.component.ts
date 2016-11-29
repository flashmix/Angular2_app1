import { Component, OnInit } from '@angular/core';
import {AutsService} from '../auts.service';

@Component({
  selector: 'app-auts',
  templateUrl: './auts.component.html',
  styleUrls: ['./auts.component.css'],
  providers: [AutsService]
})

export class AutsComponent implements OnInit {
  auts = this.ac.getAuts();

  constructor(
    private ac: AutsService
  ) { }

ngOnInit() {
 }

}