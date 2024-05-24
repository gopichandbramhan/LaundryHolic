import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custaddmoneytowallet',
  templateUrl: './custaddmoneytowallet.component.html',
  styleUrls: ['./custaddmoneytowallet.component.css']
})
export class CustaddmoneytowalletComponent {
  addMoneyForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { 
    
    this.addMoneyForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/), Validators.min(0)]]
    });
  }

  goBack(): void {
    this.router.navigate(['/customer/myrewards']);
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
