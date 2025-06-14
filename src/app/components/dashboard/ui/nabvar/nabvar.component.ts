import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  imports: [],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.scss'
})
export class NabvarComponent {
  @Input() role: String | undefined;
}
