import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import appRoutes from './app.routes';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';

import { StateService } from './state.service';
import { CoolComponent } from './cool/cool.component';
import { MyHighlightDirective } from './my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CoolComponent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
