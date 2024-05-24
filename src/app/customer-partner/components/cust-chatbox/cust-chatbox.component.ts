import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cust-chatbox',
  templateUrl: './cust-chatbox.component.html',
  styleUrls: ['./cust-chatbox.component.css']
})
export class CustChatboxComponent {
  constructor(private location: Location){}
  messages: { text: string, from: string }[] = [];
  newMessage: string = '';

  openMediaPicker() {
    console.log('Open media picker');
  }

  recordAudio() {
    console.log('Record audio');
  }
  sendMessage(message: string) {
    if (message.trim() !== '') {
      this.messages.push({ text: message, from: 'me' });

 
      this.newMessage = '';
      
      if (message === 'Shoe Repairing') {
        this.sendAutoResponse("Okay! Which type of shoes to you have ?");
      } else if (message === 'Bag Repairing') {
        this.sendAutoResponse("Okay! Which type of bag to you have ?");
      } else if (message === 'Cloth Repairing') {
        this.sendAutoResponse("Okay! Which type of clothes to you have ?");
      } else if (message === 'Other') {
        this.sendAutoResponse("How can I assist you?");
      }
    }
  }

  sendAutoResponse(response: string) {
    this.messages.push({ text: response, from: 'other' });
  }

  title = 'file-upload-app';

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // You can process the file here (e.g., upload to a server, read file contents, etc.)
    }
  }

  goBack(){
    this.location.back();
  }
}
