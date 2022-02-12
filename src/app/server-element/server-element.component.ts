import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../server.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('serverElm') element?: Server;
  @Input() name?: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.element?.name);
  }

}
