import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal-widget.html',
  styleUrl: './terminal-widget.css'
})
export class TerminalWidget {
  inputCommand = '';
  quickCommands = ['whoami', 'ping 8.8.8.8', 'neofetch', 'skills', 'projects', 'contact', 'clear'];

  logs: { text: string; type: 'input' | 'output' | 'system' }[] = [
    { text: 'AV Systems CLI [Kernel v6.12-infra] (x86_64-network-linux)', type: 'system' },
    { text: 'Gõ lệnh hoặc bấm vào các nút gợi ý bên dưới để tương tác.', type: 'system' }
  ];

  executeQuick(cmd: string): void {
    this.inputCommand = cmd;
    this.runCommand();
  }

  runCommand(): void {
    const rawCmd = this.inputCommand.trim();
    const cmd = rawCmd.toLowerCase();
    if (!cmd) return;

    this.logs.push({ text: `$ ${rawCmd}`, type: 'input' });

    if (cmd === 'help') {
      this.logs.push({ text: 'Danh sách lệnh: whoami, ping, neofetch, skills, projects, contact, resume, sudo, clear', type: 'output' });
    } else if (cmd === 'whoami') {
      this.logs.push({ text: 'Trần Hoàng Anh Vũ — Sinh viên Mạng máy tính & Truyền thông @ ĐH Văn Hiến (2023-2027). Định hướng Infrastructure, Linux & Private Cloud.', type: 'output' });
    } else if (cmd.startsWith('ping')) {
      const target = cmd.split(' ')[1] || '8.8.8.8';
      this.logs.push({ text: `PING ${target} (56 data bytes):`, type: 'output' });
      this.logs.push({ text: `64 bytes from ${target}: icmp_seq=1 ttl=118 time=11.4 ms`, type: 'output' });
      this.logs.push({ text: `64 bytes from ${target}: icmp_seq=2 ttl=118 time=12.1 ms`, type: 'output' });
      this.logs.push({ text: `--- ${target} ping statistics: 2 packets transmitted, 0% packet loss ---`, type: 'output' });
    } else if (cmd === 'neofetch' || cmd === 'uname' || cmd === 'uname -a') {
      this.logs.push({ text: '  ____  _   _   OS: Anh Vu Infra Linux x86_64', type: 'output' });
      this.logs.push({ text: ' / __ \\| | | |  Host: Van Hien University (2023-2027)', type: 'output' });
      this.logs.push({ text: '| |  | | | | |  Kernel: 6.12.0-infra-security', type: 'output' });
      this.logs.push({ text: '| |__| | |_| |  Uptime: Always Learning & Building', type: 'output' });
      this.logs.push({ text: ' \\____/ \\___/   Stack: Cisco Packet Tracer, Linux, Docker, Nextcloud, YOLOv8', type: 'output' });
    } else if (cmd === 'about') {
      this.logs.push({ text: 'Sinh viên năm 2/3 khoa CNTT, đam mê kiến trúc mạng phân tầng, bảo mật hạ tầng, Docker và điện toán đám mây riêng.', type: 'output' });
    } else if (cmd === 'skills') {
      this.logs.push({ text: '• Network: Cisco Packet Tracer, VLAN, OSPF, LACP, NAT/ACL', type: 'output' });
      this.logs.push({ text: '• Cloud & Sys: Linux Admin, Docker Compose, Nginx, Nextcloud, MinIO', type: 'output' });
      this.logs.push({ text: '• Monitor & Dev: Prometheus, Grafana, YOLOv8, Angular, TypeScript, Git', type: 'output' });
    } else if (cmd === 'projects') {
      this.logs.push({ text: '1. Cisco Enterprise Topology (VLAN / OSPF / DMZ / WAN)', type: 'output' });
      this.logs.push({ text: '2. Private Cloud Observability (Docker / Nextcloud / S3 / Prometheus)', type: 'output' });
      this.logs.push({ text: '3. AI Camera Monitoring System (YOLOv8 / OpenCV / Email Alert)', type: 'output' });
    } else if (cmd === 'contact') {
      this.logs.push({ text: 'Email: stanhvu123456@gmail.com | Phone: 0856 865 932 | GitHub: github.com/concavu', type: 'output' });
    } else if (cmd === 'resume' || cmd === 'cat resume') {
      this.logs.push({ text: 'Học vấn: ĐH Văn Hiến (2023-2027) | Ngành: Mạng máy tính & Truyền thông | Vị trí mong muốn: Network / Cloud / System Engineer Intern', type: 'output' });
    } else if (cmd.startsWith('sudo')) {
      this.logs.push({ text: 'bash: sudo: Quyền truy cập bị từ chối! Bạn đang ở chế độ Guest. Nhưng bạn hoàn toàn có thể liên hệ Vũ qua Email nhé :)', type: 'output' });
    } else if (cmd === 'clear') {
      this.logs = [];
    } else {
      this.logs.push({ text: `Lệnh không hợp lệ: "${rawCmd}". Gõ "help" hoặc bấm nút gợi ý bên dưới.`, type: 'output' });
    }

    this.inputCommand = '';
  }
}