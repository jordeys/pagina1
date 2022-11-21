import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from 'src/components/componente1/componente1.component';
import { Componente2Component } from 'src/components/componente2/componente2.component';
import { Componente3Component } from 'src/components/componente3/componente3.component';
import { Componente4Component } from 'src/components/componente4/componente4.component';

const routes: Routes = [
 
  {
      path: '', component: Componente1Component
    },
  
  {
      path: 'web2', component: Componente2Component
    },

    {
      path: 'web3', component: Componente3Component
    },
    
    {
      path: 'web4', component: Componente4Component
    },
  
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
