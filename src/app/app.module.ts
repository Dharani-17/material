import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { OneComponent } from './one/one.component';
import { StudentComponent } from './student/student.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
const routes: Routes = [{path:'one',component:OneComponent},
{path:'student',component:StudentComponent},
{path:'staffdetails',component:StaffdetailsComponent}];
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentComponent,
    StaffdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,RouterModule.forRoot(routes),
    MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
