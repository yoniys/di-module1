import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }
  add(){this.s.counter++}
}
