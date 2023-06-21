import { Component, OnInit } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
import { IRandomImageText } from 'src/app/core/interfaces/irandom-image-text';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  array1084: IRandomImageText[] = [];
  filterTerm: string = '';

  constructor() { }

  ngOnInit() {
    this.json1084();
  }

  json1084() {
    for (let i = 0; i < 1084; i++) {
      const obj: IRandomImageText = {
        id: i,
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: loremIpsum()
      }
      this.array1084.push(obj);
    }

    console.log(this.array1084[1]);
    
  }

  applyFilter(data:any, filterValue: string) {
    data.filter = filterValue.trim().toLowerCase();
  }
}
