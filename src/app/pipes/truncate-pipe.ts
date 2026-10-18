import { Pipe, PipeTransform } from '@angular/core'; // Sửa từ @angular/pipe thành @angular/core

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 60, trail: string = '...'): string {
    if (!value) return '';
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + trail;
  }
}