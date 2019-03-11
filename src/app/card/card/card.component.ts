import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  @Output() onClick;

  constructor() {
    this.onClick = new EventEmitter();
  }

  ngOnInit() {}

  onCardClick(card) {
    this.onClick.emit({card});
  }
}
