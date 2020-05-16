import { Component, OnInit, OnDestroy  } from '@angular/core';
import { trigger, transition, query, stagger, animate, style} from '@angular/animations';
import {take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

// Servicios
import { MovieService } from '../../services/movie.service';
import {Subject, Subscription} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0}),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], {optional: true })
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
