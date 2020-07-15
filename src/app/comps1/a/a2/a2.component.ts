import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }
  minus(){this.s.counter--}
}
