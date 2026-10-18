import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSection {
  bioParagraphs = [
    'Tôi là sinh viên ngành Mạng máy tính và Truyền thông tại Đại học Văn Hiến, Thành phố Hồ Chí Minh (khóa 2023–2027). Tôi đang tích lũy kinh nghiệm thực tế trong các lĩnh vực hạ tầng mạng, Linux, điện toán đám mây riêng, bảo mật và phát triển web.',
    'Các dự án của tôi tập trung vào những vấn đề thực tế của hệ thống: phân đoạn và dự phòng mạng, dịch vụ đám mây biệt lập, truyền tải phương tiện thời gian thực và giám sát hỗ trợ bởi trí tuệ nhân tạo.'
  ];
  locationInfo = 'Ho Chi Minh City / Van Hien University (2023–2027)';
  interests = 'Network infrastructure, Linux administration, private cloud, security monitoring, and software development.';
  education = {
    period: '2023–2027',
    program: 'Mạng máy tính và Truyền thông',
    institution: 'Đại học Văn Hiến',
    location: 'Thành phố Hồ Chí Minh'
  };
  focusAreas = [
    'Hạ tầng mạng và bảo mật',
    'Linux và điện toán đám mây riêng',
    'Giám sát hệ thống và ứng dụng AI'
  ];
}