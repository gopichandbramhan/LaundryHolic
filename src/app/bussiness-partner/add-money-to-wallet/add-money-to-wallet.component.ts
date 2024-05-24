import { Component, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-money-to-wallet',
  templateUrl: './add-money-to-wallet.component.html',
  styleUrls: ['./add-money-to-wallet.component.css']
})
export class AddMoneyToWalletComponent {
  addMoneyForm: FormGroup;
  constructor(private location: Location, private fb: FormBuilder) { 
    
    this.addMoneyForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/), Validators.min(0)]]
    });
  }

  goBack(): void {
    this.location.back();
  }

  @ViewChild('amountInput') amountInputRef!: ElementRef;

  updateInput(event: MouseEvent) {
    const target = event.target as HTMLLabelElement;
    if (target.tagName === 'LABEL') {
      const labelText = target.innerText;
      this.amountInputRef.nativeElement.value = labelText.trim();
    }
  }

}

