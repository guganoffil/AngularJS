import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { DetilService } from './Services/detil.service';
import { SqrtPipe } from './sqrt.pipe';
import { LeftComponent } from './left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    MiddleComponent,
    SqrtPipe,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [DetilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
