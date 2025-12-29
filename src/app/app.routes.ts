import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
      {
    path: '', 
    component: Home, // This will show when you click "Home"
    pathMatch: 'full'
  },
    {
    path: 'profile',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProfileView'
      }).then(m => m.ProfileView)
  }
];
