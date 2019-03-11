import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FieldComponent } from './field/field.component';
import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    FieldComponent,
    ColumnComponent,
    RowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {}
