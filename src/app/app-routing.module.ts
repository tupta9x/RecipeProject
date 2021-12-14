import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule'},
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
];

@NgModule({
  // in lazy-loaded module the service available in loaded component
  // in AppModule the service available in app-wide
  // in AppComponent (or other Components) the service available in component tree
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
