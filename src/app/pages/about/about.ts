import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MaterialModule,FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
