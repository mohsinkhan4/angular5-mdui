import { Component, OnInit }       from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { DynamicFormFieldService } from './services/dynamic-form-field.service';
import { DynamicFormSectionService } from './services/dynamic-form-section.service';
import { DynamicFormService } from './services/dynamic-form.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [ DynamicFormFieldService, DynamicFormSectionService, DynamicFormService ]
})
export class AppComponent implements OnInit{

    dynamicForm: any;

    constructor(private translate: TranslateService, private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
        // this.dynamicFormService.initForm();
        // this.dynamicForm = this.dynamicFormService.getForm();
        this.handleTranslations();
    }
    
    handleTranslations() {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
    
        let browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

}
 
