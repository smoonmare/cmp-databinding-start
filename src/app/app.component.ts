import { Component, Output } from '@angular/core';
import { Server } from './server.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [
    {
      type: 'blueprint',
      name: 'Test server 1',
      content: 'Test content'
    },
    {
      type: 'dev server',
      name: 'Dev server 1',
      content: 'Test content'
    },
    {
      type: 'dev server',
      name: 'Dev server 2',
      content: 'Test content'
    },
    {
      type: 'server',
      name: 'Prod server',
      content: 'Test content'
    }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent 
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
