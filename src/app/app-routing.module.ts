import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [{ path: '', component: IndexComponent },{ path: 'cats', component: CatsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
