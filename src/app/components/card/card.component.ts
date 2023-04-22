import { Component, Output , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title = '';
  @Input() value = '';
  @Input() variation = '';
  @Input() update = '';
  @Input() isBlue :boolean = false;
  @Input() isGreen :boolean = false;
  @Input() isRed :boolean = false;
  @Input() error :boolean = false;
}
