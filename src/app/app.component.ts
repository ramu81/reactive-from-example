import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase }    from './question-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  
   questions$: Observable<QuestionBase<any>[]>;
  
  constructor(service: QuestionService) {
    this.questions$ = service.questions;	
  }
  
  time = new Observable<any>(observer => {
    setInterval(() => observer.next(Date.now()), 1000);
  });

  }
