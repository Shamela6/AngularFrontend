import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-webcheck',
  templateUrl: './webcheck.component.html',
  styleUrls: ['./webcheck.component.css']
})
export class WebcheckComponent {
  //form= { pnr:null, name:'',email:'', phone:null };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  authService: any;
  router: any;

  formData: any = {}; // Initialize form data

  onSubmit() {
    if (this.isFormValid()) {
      // Handle successful form submission
      alert('Check-in confirmed successfully! You may logout now.');
      this.reloadPage();
      // Alternatively, you can use a different alert library for more styled or customized alerts
    } else {
      alert('Please fill in the required fields correctly.');
    }
  }

  isFormValid(): boolean {
    // Perform your form validation logic here
    // For example, you can check this.formData for validity
    // Return true if valid, false if not
    return this.formData.pnrNumber && this.formData.Name && this.formData.email && this.formData.phone;
  }
  

  reloadPage(): void {
    window.location.reload();
  }
}
