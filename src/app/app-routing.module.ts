import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
 //{path:"",component:LoginComponent}, //la prima pagina che viene visualizzata attraverso il <route-outlet>




  {path:"**",component:NotFoundComponent}  //se metto un /namepage che non esiste, vengo indirizzato in una pagina di errore];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
