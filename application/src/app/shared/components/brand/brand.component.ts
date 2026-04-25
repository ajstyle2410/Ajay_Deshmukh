import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="brand-container" [class.brand-with-logo]="showLogo">
      <img *ngIf="showLogo" src="arc-i-tech.png" alt="Arc-i-Tech Logo" class="brand-logo">
      <span class="brand-text">
        Arc<i class="brand-italic">i</i>Tech<span class="brand-dot">.</span>
      </span>
    </div>
  `,
  styles: [`
    .brand-container {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: -0.5px;
    }

    .brand-with-logo {
      gap: 12px;
    }

    .brand-logo {
      height: 40px;
      width: auto;
      display: block;
    }

    .brand-text {
      color: var(--brand-primary, #112d4e);
      display: flex;
      align-items: center;
      gap: 0;
      white-space: nowrap;
    }

    .brand-italic {
      font-style: italic;
      font-weight: 700;
      color: var(--brand-secondary, #3F72AF);
    }

    .brand-dot {
      color: #ef4444;
      font-weight: 900;
      font-size: 24px;
      line-height: 1;
      margin-left: 2px;
    }

    @media (max-width: 768px) {
      .brand-container {
        font-size: 18px;
      }

      .brand-logo {
        height: 32px;
      }
    }
  `]
})
export class BrandComponent {
  @Input() showLogo: boolean = false;
}
