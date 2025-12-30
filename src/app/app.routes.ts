import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Home } from './home/home';
export const routes: Routes = [
  {
    path: '', 
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './profile-feature'
      }).then(m => m.PROFILE_FEATURE_ROUTES) // <--- Use the specific export name
  }
];