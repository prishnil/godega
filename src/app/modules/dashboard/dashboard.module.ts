import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { RecipeListComponent } from './components/list/recipe-list/recipe-list.component';
import { ItemListComponent } from './components/list/item-list/item-list.component';
import { RecipeItemComponent } from './components/list/recipe-list/recipe-item/recipe-item.component';
import { ItemItemComponent } from './components/list/item-list/item-item/item-item.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    ListComponent,
    RecipeListComponent,
    ItemListComponent,
    RecipeItemComponent,
    ItemItemComponent
  ],
  imports: [
    SharedModule,
    MaterialModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
