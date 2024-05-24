import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-schedule-pickup',
  templateUrl: './cust-schedule-pickup.component.html',
  styleUrls: ['./cust-schedule-pickup.component.css']
})
export class CustSchedulePickupComponent {

  showchoosevendorbutton = false;
  showvendorlist: boolean = false;
  showModal: boolean = false;
  activeButton: number | null = null;
  setActiveButton(index: number): void {
    this.activeButton = index;
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.scheduleForm = this.fb.group({
      deliveryMode: ['', Validators.required],
      date: ['', Validators.required], 
      timeSlot: ['', Validators.required],
      selectVendor: ['', Validators.required],
    });
    this.currentDate = ''; 
  }

  goBack() {
    this.router.navigate(['/customer/addtocart']);
  }
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  showActivePopUp() {
    Swal.fire({
      title: "",
      text: "To get free delivery, order above ₹299",
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  }

  showNormalPopUp() {
    Swal.fire({
      title: "",
      text: "On 1st Express Delivery You get 20% off.",
      icon: "success",
      confirmButtonText: "OK"
    })
  }

  // display current month
  currentDate: string;
  months: string[] = [];

  ngOnInit(): void {
    const now = new Date();
    const monthOptions: Intl.DateTimeFormatOptions = { month: 'long' };
    this.currentDate = new Intl.DateTimeFormat('en-US', monthOptions).format(now);
    this.generateMonths();
  }

  generateMonths(): void {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthIndex = new Date().getMonth(); 
    this.months = [];
    for (let i = currentMonthIndex + 1; i < currentMonthIndex + 1 + 11; i++) {
      this.months.push(monthNames[i % 12]); 
    }
  }

cards = [
  {img: '/assets/Images/shop.png', storename: "akshay store", address:"21/A, Ladikar layout, Ambika nagar, Ayodhya nagar, Manewada road, Nagpur 440024"},
  {img: '/assets/Images/shop.png', storename: "sakshi store", address:"21/A, Ladikar layout, Ambika nagar, Ayodhya nagar, Manewada road, Nagpur 440024"},
  {img: '/assets/Images/shop.png', storename: "kanchan store", address:"21/A, Ladikar layout, Ambika nagar, Ayodhya nagar, Manewada road, Nagpur 440024"},
  {img: '/assets/Images/shop.png', storename: "suraj store", address:"21/A, Ladikar layout, Ambika nagar, Ayodhya nagar, Manewada road, Nagpur 440024"}
]
selectedIndex: number | null = null;

selectCard(index: number): void {
  this.selectedIndex = index;
  }

  //delivery methods start
  showNormalImage: boolean = true;
  showExpressImage: boolean = true;
  handleNormalDeliveryClick(event: MouseEvent): void {
    const normalButtons = document.querySelectorAll('.delivery-mode1, .activenormal');
    normalButtons.forEach(button => {
      button.classList.remove('activenormal');
    });
    (event.currentTarget as HTMLElement).classList.add('activenormal');

    const expressButtons = document.querySelectorAll('.delivery-mode2, .activeexpress');
    expressButtons.forEach(button => {
      button.classList.remove('activeexpress');
    });

    this.showNormalImage = false;
    this.showExpressImage = true;
  }

  handleExpressDeliveryClick(event: MouseEvent): void {
    const expressButtons = document.querySelectorAll('.delivery-mode2, .activeexpress');
    expressButtons.forEach(button => {
      button.classList.remove('activeexpress');
    });
    (event.currentTarget as HTMLElement).classList.add('activeexpress');

    const normalButtons = document.querySelectorAll('.delivery-mode1, .activenormal');
    normalButtons.forEach(button => {
      button.classList.remove('activenormal');
    });
    this.showExpressImage = false;
    this.showNormalImage = true;
  }
  //delivery methods end

  //Validation
  scheduleForm: FormGroup;
  selectedTimeSlot: string | null = null;
  
  selectTimeSlot(slot: string): void {
    this.scheduleForm.get('timeSlot')!.setValue(slot);
    this.selectedTimeSlot = slot; 
  }

  isTimeSlotSelected(slot: string): boolean {
    return this.selectedTimeSlot === slot;
  }

  isInvalid(): boolean {
    const timeSlotControl = this.scheduleForm.get('timeSlot');
    return timeSlotControl != null && timeSlotControl.invalid && timeSlotControl.touched;
  }

  handleSubmit(): void {
    console.log(this.scheduleForm.value);
  }

  get f(): { [key: string]: any } {
    return this.scheduleForm.controls;
  }


  // hide show of two containers
  showSchedulePickup: boolean = false;
  hideSchedulePickup: boolean = true;

  plans=[
    {id:'1', planname:"Basic Plan", price:"₹1000/month"},
    {id:'2', planname:"Gold Plan", price:"₹2000/month"},
    {id:'3', planname:"Premium Plan", price:"₹3000/month"},
  ]
  showSelectButton = true; // Controls the visibility of the Select Plan button
  selectedPlanDetails = null; // To store the details of the selected plan


}
