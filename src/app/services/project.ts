import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  category: 'network' | 'cloud' | 'ai';
  categoryLabel: string;
  visualLabel: string;
  tags: string[];
  link: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Cơ sở hạ tầng mạng doanh nghiệp',
      description: 'Mô phỏng cấu trúc mạng doanh nghiệp phân cấp với các phân đoạn VLAN, trung tâm máy chủ DMZ và văn phòng chi nhánh kết nối qua mạng WAN.',
      category: 'network',
      categoryLabel: 'CISCO PACKET TRACER · MẠNG',
      visualLabel: '01 / TOPOLOGY',
      tags: ['VLAN · 802.1Q', 'Vùng OSPF 0', 'LACP · DMZ'],
      link: 'https://github.com/concavu/PR-Cisco',
      image: 'https://placehold.co/600x400/1e3a5f/53d7f5?text=Network+Topology'
    },
    {
      title: 'Nền tảng đám mây riêng và khả năng quan sát dành cho doanh nghiệp',
      description: 'Triển khai cloud riêng phân đoạn nhỏ với reverse proxy, các dịch vụ ứng dụng và dữ liệu được cách ly; lưu trữ S3, giám sát máy chủ và container.',
      category: 'cloud',
      categoryLabel: 'DOCKER · ĐÁM MÂY RIÊNG',
      visualLabel: '02 / NỀN TẢNG',
      tags: ['Docker · Nextcloud', 'MariaDB · Redis', 'MinIO · Prometheus'],
      link: 'https://github.com/concavu/PRIVATE-CLOUD-MONITORING',
      image: 'https://placehold.co/600x400/1e3a5f/53d7f5?text=Private+Cloud'
    },
    {
      title: 'Giám sát xâm nhập bằng camera AI',
      description: 'Dự án nhóm sinh viên kết hợp truyền tải video qua mạng LAN với tính năng nhận diện người hỗ trợ bởi trí tuệ nhân tạo và cảnh báo email không đồng bộ.',
      category: 'ai',
      categoryLabel: 'THỊ GIÁC MÁY TÍNH & MÔ HÌNH AI',
      visualLabel: '03 / PHÁT HIỆN',
      tags: ['UDP · TCP', 'YOLOv8 · ONNX', 'OpenCV · SMTP'],
      link: 'https://github.com/concavu/CameraMoniterSystem',
      image: 'https://placehold.co/600x400/1e3a5f/53d7f5?text=AI+Detection'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}