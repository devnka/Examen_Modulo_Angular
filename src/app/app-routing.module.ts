import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './colaboradores/index/index.component';
import { CreateComponent } from './colaboradores/create/create.component';
import { EditComponent } from './colaboradores/edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'colaboradores/index', pathMatch: 'full'},
  { path: 'colaboradores/index', component: IndexComponent },
  { path: 'colaboradores/crear', component: CreateComponent },
  { path: 'colaboradores/editar/:idColaborador', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
