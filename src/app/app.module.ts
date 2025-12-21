import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';``
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { DetailsIdComponent } from './details-id/details-id.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertDBComponent,
    DisplayAllComponent,
    DetailsIdComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
