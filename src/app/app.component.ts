import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-audio-player';
  getValue(){
    const inputElement = document.getElementById('exampleFormControlInput1') as HTMLInputElement;
    const inputValue = inputElement.value;
    this.currentFile = inputValue;
    this.converted = inputValue; // Update this line if you have a conversion logic
  }
  converted='https://pkdev.coplsaas.com.au/reports/output.mp3';
  currentFile='https://pkdev.coplsaas.com.au/reports/1685371991196.attachment_1685371985371.m4a';

}
