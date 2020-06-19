import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {UniversitiesRoutingModule} from './universities-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UniversitiesMapComponent } from './components/universities-map/universities-map.component';



@NgModule({
  declarations: [SearchComponent, UniversitiesMapComponent],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],



})
export class UniversitiesModule { }
