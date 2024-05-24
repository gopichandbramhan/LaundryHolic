import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-footer',
  templateUrl: './cust-footer.component.html',
  styleUrls: ['./cust-footer.component.css']
})
export class CustFooterComponent {
  constructor(private router: Router) { }

  gotoPrivacyPolicy() {
    this.router.navigate(['/privacypolicy'])
  }

  gotoHome() {
    this.router.navigate(['/customer'])
  }

  goToServicePage() {
    this.router.navigate(['/customer/services']);
  }

  gotoTermsAndConditionsCustPage() {
    this.router.navigate(['/customer/terms&conditions']);
  }

  gotoTermsAndConditionsVendeorPage() {
    this.router.navigate(['/bussiness/terms&conditions'])
  }

  openWhatsApp() {
    const whatsappUrl = `https://wa.me`;

    window.open(whatsappUrl, '_blank');
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log(text);
    }, error => {
      console.error('Could not copy text: ', error);
    });
  }

  sendEmail() {
    const email = 'https://mail.google.com/mail/u/0/#inbox?compose=new'; // Replace with the email address
    const subject = 'Subject Text';
    const body = 'Body Text';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }
}
