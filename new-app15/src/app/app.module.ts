import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './pipes/custom.pipe';
import { LayoutComponent } from './layout/layout.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceComponent,
    ChildComponent,
    ParentComponent,
    PipeComponent,
    CustomPipe,
    LayoutComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
