import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  providers:[S1Service]
})
export class AComponent implements OnInit {

  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }

}
