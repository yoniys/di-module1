import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }
  minus(){this.s.counter--}
}
