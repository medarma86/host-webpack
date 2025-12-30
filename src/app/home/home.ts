import { Component, inject } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
sharedService: any;

async ngOnInit() {
    // Load the service from the Remote
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './data-service'
    });

    // Module Federation returns the exported class. 
    // Since it's 'providedIn: root', Angular manages the singleton.
    // this.sharedService = module.SharedDataService;
    // this.sharedService = inject(module.SharedDataService);
    this.sharedService = new module.SharedDataService();
  }

  changeName(val: string) {
    if (this.sharedService) {
      // Logic to update the name
      // Note: If you used a Signal, you'd call a method on the service
      this.sharedService.updateName(val);
    }
  }
}
