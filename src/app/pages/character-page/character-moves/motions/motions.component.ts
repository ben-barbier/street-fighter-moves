import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-motions',
  templateUrl: './motions.component.html',
  styleUrls: ['./motions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class MotionsComponent {
  @Input() motions: string[] = [];

  public displayImage(motion: string): boolean {
    return ['[', ']'].every(noImage => noImage !== motion);
  }
}
