import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'All'
    },
    {
      title: 'Classic',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Action and Adventure',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Graphic Novel',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Mystery',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Fantasy',
      url: '/folder/Spam',
      icon: 'warning'
    },
    {
      title: 'Fiction'
    },
    {
      title: 'Horror'
    },
    {
      title: 'Romance'
    },
    {
      title: 'Science Fiction'
    },
    {
      title: 'Short Stories'
    },
    {
      title: 'Thrillers'
    },
    {
      title: 'Biographies '
    },
    {
      title: 'History'
    },
    {
      title: 'Memoir'
    },
    {
      title: 'Poetry '
    },
    
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
