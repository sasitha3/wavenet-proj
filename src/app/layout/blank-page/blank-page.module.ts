import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, MatPaginatorModule,],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
