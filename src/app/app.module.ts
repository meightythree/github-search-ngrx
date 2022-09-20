import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AngularMaterialModule } from './mat.modules';
import { SearchComponent } from 'src/feature/search/search.component';
import { HistoryComponent } from 'src/feature/history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from 'src/store/search/search-effects';
import { searchReducer } from 'src/store/search/search-reducer';

@NgModule({
  declarations: [AppComponent, SearchComponent, HistoryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      search: searchReducer,
    }),
    EffectsModule.forRoot([SearchEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
