import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css'
})
export class SkillsSection {
  skillCategories = [
    {
      key: 'networking',
      title: 'Networking & Infrastructure',
      skills: ['Cisco Packet Tracer', 'VLAN & 802.1Q', 'OSPF', 'LACP', 'ACL & NAT']
    },
    {
      key: 'cloud',
      title: 'Systems & Cloud',
      skills: ['Linux Administration', 'Docker & Docker Compose', 'Nginx Edge Proxy', 'Nextcloud', 'MinIO S3']
    },
    {
      key: 'security',
      title: 'Monitoring & Security',
      skills: ['Prometheus', 'Grafana', 'YOLOv8', 'ONNX Runtime', 'Network Security']
    },
    {
      key: 'dev',
      title: 'Development & Tools',
      skills: ['Angular & TypeScript', 'JavaScript', 'HTML/CSS', 'Git & GitHub', 'C# / Python']
    }
  ];
}