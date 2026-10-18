import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
  greeting = 'SYSTEMS THINKING · SECURE BY DESIGN';
  name = 'Trần Hoàng Anh Vũ';
  title = 'Infrastructure / Network / Cloud Enthusiast';
  tagline = 'Building the systems that keep us moving.';
  description = 'Sinh viên ngành Mạng máy tính và Truyền thông tại Đại học Văn Hiến (2023–2027), quan tâm đến cơ sở hạ tầng bảo mật, Linux, nền tảng đám mây và phát triển web.';
  avatarUrl = 'pic-Tranvu.jpg';
}