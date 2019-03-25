import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';
import {ModalService} from '../../services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() size: string;
  @Output() close = new EventEmitter();

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  modalSize(): string {
    switch (this.size) {
      case 'small':
        return 'modal-sm';

      case 'large':
        return 'modal-lg';

      default:
        return '';
    }
  }

  onClose(): void {
    this.modalService.close();
    this.close.emit();
  }
}
