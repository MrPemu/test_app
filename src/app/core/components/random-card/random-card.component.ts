import { Component, Input, OnInit } from '@angular/core';
import { IRandomImageText } from 'src/app/core/interfaces/irandom-image-text';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.scss'],
})
export class RandomCardComponent  implements OnInit {
  @Input() data: IRandomImageText;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}
