import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage {
  public appPages = [
   
    {
      title: 'ಯಕ್ಷಧ್ವನಿ: ಲನಾಭಟ್',
      TelegramPersonal:'',
      Email:'',
      Phone:'',
      Webpage:'',
      TelegramGroup:'',
      url: '/yakshadhwani',
      icon: 'ios-mic'
    },
    {
      title: 'ಧ್ವನಿಮುದ್ರಣ ಬಳಗ',
      url: '/dhwanimudrana',
      icon: 'md-microphone'
    },
    {
      title: 'ರೆಕಾರ್ಡಿಂಗ್ ಮೇಳ',
      url: '/recordingMela',
      icon: 'ios-megaphone'
    },
    {
      title: 'ಹುಡುಕಾಟ...',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'ಸಂಪರ್ಕ...',
      url: '/contactus',
      icon: 'mail'
    },
  ];
  pageCategory = 'ContactUs';
}
