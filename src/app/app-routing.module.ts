import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { ChampionsComponent } from './champions/champions.component';
import { ItemsComponent } from './items/items.component';
import { ElementsComponent } from './elements/elements.component';
import { PropertiesComponent } from './properties/properties.component';


const routes: Routes = [
  {path: '', redirectTo: '/testing', pathMatch: 'full'},
  {path: 'testing', component: TestingComponent },
  {path: 'champs', component: ChampionsComponent },
  {path: 'items', component: ItemsComponent },
  {path: 'elements', component: ElementsComponent },
  {path: 'properties', component: PropertiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
