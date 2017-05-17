import { Routes, RouterModule } from '@angular/router';

import { BindingComponent } from './binding/binding.component';
import { CoolComponent } from './cool/cool.component';

const routes: Routes = [
  { path: '', component: BindingComponent },
  { path: 'cool', component: CoolComponent }
];

const Routing = RouterModule.forRoot(routes);

export default Routing;
