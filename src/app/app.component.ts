import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICountState } from './reducers/count/count.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';
import {
  CountIncreaseAction,
  CountDecreaseAction,
  CountClearAction,
} from './reducers/count/count.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public isButtonDisabled$: Observable<boolean> = this.count$.pipe(
    map((count) => count <= 0)
  );
  public updatedAt$: Observable<number> = this.store$.pipe(
    select(selectUpdatedAt)
  );

  constructor(private store$: Store<ICountState>) {}

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
