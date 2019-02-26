import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from '@angular/forms';
// module bundle components, services into one place
@NgModule({
  // my components I have created
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  // add modules to this modules (access functionality)
  imports: [
    BrowserModule,
    FormsModule
  ],
  // services I have created
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
