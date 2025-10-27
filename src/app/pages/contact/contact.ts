import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  mapUrl: SafeResourceUrl;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    const src =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4240.829265716516!2d77.96941348092426!3d14.08516242579263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3d45a695c199f%3A0x4e1b1ed1fffcc504!2sNallamada%20Rd%2C%20Satarlapalle%2C%20Andhra%20Pradesh%20515531!5e0!3m2!1sen!2sin!4v1761539342320!5m2!1sen!2sin';
    const embedUrl =
      'https://www.google.com/maps/place/Nallamada+Rd,+Satarlapalle,+Andhra+Pradesh+515531/@14.0851624,77.9694135,16.87z/data=!4m6!3m5!1s0x3bb3d45a695c199f:0x4e1b1ed1fffcc504!8m2!3d14.0851729!4d77.9696418!16s%2Fg%2F11gff6y38d!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D'; // your embed link
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.snackBar.open('Message sent successfully!', 'Close', {
          duration: 3000,
        });
        this.contactForm.reset();
      }, 1000);
    }
  }
}
