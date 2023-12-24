import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
    MatDialogTitle,
    FormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
}
