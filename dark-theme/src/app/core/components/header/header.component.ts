import { Component } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    
    if (theme) {
      this.textTheme = ETheme.TEXT_SUN
      this.icon = ETheme.ICON_SUN;
    } else {
      this.textTheme = ETheme.TEXT_MOON
      this.icon = ETheme.ICON_MOON;
    }
  }
}
