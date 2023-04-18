import { Component, Output , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  @Input() title = '';
  @Input() value = '';
  @Input() variacao = '';
  @Input() atualizado = '';
}
