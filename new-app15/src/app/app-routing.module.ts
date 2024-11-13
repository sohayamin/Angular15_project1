import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  // { path: 'template-reference', component: TemplateReferenceComponent},
  { path: '', component: LayoutComponent,
    children: [
      {
        path: 'pipe',
        component: PipeComponent
      },
      { 
        path: 'template-reference', 
        component: TemplateReferenceComponent
      },
      { 
        path: 'tdf', 
        component: TdfComponent
      },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
