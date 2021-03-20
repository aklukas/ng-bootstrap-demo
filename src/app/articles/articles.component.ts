import {Component} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  cards = [
    {title: 'Evergreens', description: 'Evergreen tree types'},
    {title: 'Bonsai', description: 'Trimming techniques'},
    {title: 'Juniper', description: 'Hardwoods Pt. 1'},
    {title: 'Mesquite', description: 'Hardwoods Pt. 2'},
  ];
}
