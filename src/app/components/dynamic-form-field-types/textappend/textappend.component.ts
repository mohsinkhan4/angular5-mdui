import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-textappend',
  templateUrl: './textappend.component.html',
  //styleUrls: ['./textappend.component.css']
})
export class TextAppendComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    suffix="<name>";
    masterOptions = [
      { key: 'Mr.', value: 'Mr.' }, 
      { key: 'Mrs.', value: 'Mrs.' },
      { key: 'Miss', value: 'Miss' }, 
    ];

    constructor() { }

    ngOnInit() { }

    changecat(value:HTMLSelectElement) {
      this.suffix = this.dfForm.value.dc_textappend + " " + this.suffix;
    }

}
