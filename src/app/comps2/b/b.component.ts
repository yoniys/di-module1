import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  providers:[S1Service]
})
export class BComponent implements OnInit {

  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }

}
