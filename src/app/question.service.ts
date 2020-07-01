import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { DropDownQuestion } from './question-dropdown';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  
  get questions() {
	let questions: QuestionBase<string>[] = [
		  new DropDownQuestion({
        key: 'gender',
        label: 'Gender ',
		value: 'male',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'},
          {key: 'unisex',   value: 'Unisex'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: 'Ram',
        required: true,
        order: 1
      }),

	   new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name',
        value: 'Kondapalli',
        required: true,
        order: 2
      }),
	  
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
		value: 'ramudu.kp@gmail.com',
        order: 3
      })
	];
	return of(questions.sort((a,b) => a.order - b.order ));
  }
}
