import * as ShoppingListActions from './store/shopping-list.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducer'
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList')
    // this.store.select('shoppingList').subscribe()
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );

    this.loggingService.printlog('Hello from ShoppingList Component')
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
