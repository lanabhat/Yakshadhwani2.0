import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public groupDetails = [
    {
      title: 'ತಾಳಮದ್ದಳೆ ಕೂಟ/ಧ್ವನಿಮುದ್ರಣ ಬಳಗ',
      url: 'tel:+91 000 000 0000',
      icon: 'book',
    },
    {
      title: 'ಅರ್ಥಾಂಬುಧಿ/ರೆಕಾರ್ಡಿಂಗ್ ಮೇಳ',
      url: 'https://t.me/arthambudhi',
      icon: 'build',
    },
    {
      title: 'ಯಕ್ಷಧ್ವನಿ',
      url: 'https://t.me/yakshdhwani',
      icon: 'grid',
    },
    
  ];

}
