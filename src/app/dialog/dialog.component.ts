import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogTitle} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-dialog',
  standalone: true,
    imports: [
      MatButtonModule,
      MatDialogActions,
      MatDialogClose,
      MatDialogTitle,
      MatSelectModule
    ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

}
