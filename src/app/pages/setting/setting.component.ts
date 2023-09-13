import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {


  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'gr']);
    translate.setDefaultLang('en');

  }
  public englishlanguagebutton() {
    this.translate.use('en');

  }
  public persianlanguagebutton() {
    this.translate.use('fr');

  }
  public germanylanguagebutton() {
    this.translate.use('gr');

  }


  public settingfunction() {
    var box;
    box = document.getElementById('box');
    // box?.style.display = 'none';
    // alert();
  }
}
