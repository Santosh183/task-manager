import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { TaskFormComponent } from './components/task-form/task-form.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
