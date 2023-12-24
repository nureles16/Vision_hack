import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}
  b5 = "assets/images/profile.png";
/*
  openModal() {
    this.dialog.open(ModalComponent, {
      width: '400px', // Adjust width as needed
    });
  }*/
  openModal() {
    this.dialog.open(ModalComponent,{
      width:'350px',
      position:{
        top:"-50%",
        left:'35%',
      }
    });
  }
}
