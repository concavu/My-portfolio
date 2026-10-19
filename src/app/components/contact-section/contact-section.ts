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

  // 1. Cho phép copiedType nhận thêm giá trị 'github'
  copiedType: 'email' | 'phone' | 'github' | null = null;

  // 2. Mở rộng type cho tham số thứ hai của hàm copyText
  async copyText(text: string, type: 'email' | 'phone' | 'github'): Promise<void> {
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