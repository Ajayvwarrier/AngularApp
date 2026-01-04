import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { DetailsIdComponent } from './details-id/details-id.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // Set home as default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  // Your original student management routes
  { path: 'Details All', component: DisplayAllComponent },
  { path: 'Db Insert', component: InsertDBComponent },
  { path: 'Details/:id', component: DetailsIdComponent },
  { path: 'editdetails/:id', component: EditDetailsComponent },
  
  // Redirect any unknown routes to home
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }