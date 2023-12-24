import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}
  b5 = "assets/images/profile.png";
  openModal() {
    this.dialog.open(DialogComponent,{
      width: '350px',
    })
    /*
    this.dialog.open(ModalComponent,{
      width:'350px',
      position:{
        top:"-50%",
        left:'35%',
      }
    });*/
  }
}
