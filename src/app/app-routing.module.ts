import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { DetailsIdComponent } from './details-id/details-id.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
const routes: Routes = [
  { path: '', component: DisplayAllComponent },
  { path: 'Details All', component: DisplayAllComponent },
  { path: 'Db Insert', component: InsertDBComponent },
  {path: 'Details/:id', component: DetailsIdComponent},
  {path: 'editdetails/:id', component: EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
