import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Prime ng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

const primesModule: any = {
  ButtonModule,
  CardModule,
};

@NgModule({
  declarations: [],
  imports: [],
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
})
export class PrimeNgModule {}
