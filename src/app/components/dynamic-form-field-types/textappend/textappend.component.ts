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

    suffix="Rajvardhan Oak";
    masterOptions = [];

    constructor() { }

    ngOnInit() {
        
    }

    changecat(value:HTMLSelectElement) {
      //console.log("**");
      console.log(this.dfForm.value.dc_textappend);

      this.suffix=this.dfForm.value.dc_textappend+this.suffix;
      

      
    }

}
