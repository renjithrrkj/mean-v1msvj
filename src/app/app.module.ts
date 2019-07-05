import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { GraphComponent } from './graph/graph.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SampleListComponent } from './sample-list/sample-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GraphComponent,
    SampleListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
     RouterModule.forRoot([
      { path: 'graph', component: GraphComponent },
      { path: 'sampleList', component: SampleListComponent },
    ]),
    ChartsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
