import { Component, OnInit } from '@angular/core';
import { Cancel } from '../models/cancel.model';
import { CancelBookingService } from '../_service/cancel-booking.service';
import { TokenStorageService } from '../_service/token-storage.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent{
//   isLoggedIn=false;
// usermail:any;
 // form:any={
   // booking_id:null,
  //}
  //msg=new Cancel(true);
  
  
  // data:any;
  // booking_cancelled=false;
  //constructor(private tokenStorageService:TokenStorageService,private cancelBooking:CancelBookingService) { }

  // ngOnInit(): void {
  //   this.isLoggedIn = !!this.tokenStorageService.getToken();
  //   if (this.isLoggedIn) {
  //     const user = this.tokenStorageService.getUser();
  //     this.usermail = user.email;
  //   }
  // }

  // onSubmit():void{
  //   console.log(this.form.booking_id);
  //   const{booking_id}=this.form;
  //   console.log(this.msg);
  //   this.cancelBooking.cancelBooking(booking_id,this.usermail,this.msg).subscribe(data=>{
  //     this.booking_cancelled=true
  //  return this.data;});
  // }
  // clickAlert(){
  //   alert("Confirm Cancellation!");
  // }


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
    return this.formData.pnrNumber;
  }
  

  reloadPage(): void {
    window.location.reload();
  }


 
}