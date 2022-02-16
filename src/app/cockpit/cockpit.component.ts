import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value ? nameInput.value : 'Server name',
      serverContent: contentInput.value ? contentInput.value : 'Server content'
    })
    // this.serverCreated.emit({
    //   serverName: this.newServerName ? this.newServerName : 'Server name',
    //   serverContent: this.newServerContent ? this.newServerContent : 'Server content'
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value ? nameInput.value : 'Blueprint name',
      serverContent: contentInput.value ? contentInput.value : 'Blueprint content'
    })
    // this.blueprintCreated.emit({
    //   serverName: this.newServerName ? this.newServerName : 'Blueprint name',
    //   serverContent: this.newServerContent ? this.newServerContent : 'Blueprint content'
    // })
  }

}
