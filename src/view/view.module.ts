import { ModuleWithProviders, NgModule } from '@angular/core';
import { FroalaViewDirective } from './view.directive';

@NgModule({
  declarations: [FroalaViewDirective],
  exports: [FroalaViewDirective],
})
export class FroalaViewModule {
  public static forRoot(): ModuleWithProviders<FroalaViewModule> {
    return { ngModule: FroalaViewModule, providers: [] };
  }
}
