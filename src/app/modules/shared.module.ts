import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { SpinnerModule } from '../components/shared/spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  exports: [AppMaterialModule, SpinnerModule],
})
export class SharedModule {}
