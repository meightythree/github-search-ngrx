import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GithubApiResults } from 'src/models/github-api-results';
import { SearchParameters } from 'src/models/search-parameters';
import { search } from 'src/store/search/search-actions';
import { selectResults } from 'src/store/search/search-selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchBy = '';
  byName = false;
  byDescription = false;
  byReadme = false;

  results$: Observable<GithubApiResults[]> = this._store.select(selectResults);

  constructor(private _store: Store) {}

  ngOnInit(): void {}

  search(): void {
    const searchParams: SearchParameters = {
      byDescription: this.byDescription,
      byName: this.byName,
      searchBy: this.searchBy,
      byReadme: this.byReadme,
    };
    this._store.dispatch(
      search({
        searchParams,
      })
    );
  }

  reset(): void {}
}
