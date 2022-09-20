import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from 'src/feature/history/history.component';
import { SearchComponent } from 'src/feature/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
