import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.html',
  styleUrls: ['./contact-section.css']
})
export class ContactSection {
  email = 'stanhvu123456@gmail.com'; 
  githubUrl = 'https://github.com/concavu';
  phone = '0856 865 932';
  phoneHref = 'tel:+84856865932';
  
  currentYear = new Date().getFullYear();
  userName = 'Trần Hoàng Anh Vũ';

  copiedType: 'email' | 'phone' | null = null;

  async copyText(text: string, type: 'email' | 'phone'): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      this.copiedType = type;
      setTimeout(() => {
        if (this.copiedType === type) {
          this.copiedType = null;
        }
      }, 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.copiedType = type;
      setTimeout(() => {
        if (this.copiedType === type) {
          this.copiedType = null;
        }
      }, 2500);
    }
  }
}