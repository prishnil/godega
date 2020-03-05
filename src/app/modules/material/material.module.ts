import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class MaterialModule {}
