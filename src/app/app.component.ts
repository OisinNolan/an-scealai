import { Component, OnInit, HostListener } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { StoryService } from './story.service';
import { Story } from './story';
import { NotificationService } from './notification-service.service';
import { EngagementService } from './engagement.service';
import { TranslationService } from './translation.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title: string = 'An Scéalaí';
  checkVal: boolean = false;
  notificationsShown : boolean = false;
  storiesForNotifications : Story[] = [];
  //messagesForNotifications : Message[] = [];
  //unreadMessages : number = 0;
  wasInside : boolean = false;

  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, public auth: AuthenticationService,
              private storyService : StoryService, private notificationSerivce : NotificationService,
              private engagement: EngagementService, public ts : TranslationService) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

/*
* Set the page langauge
* Get list of stories that have notifications
*/
  ngOnInit() {
    this.ts.initLanguage();
    this.notificationSerivce.getStories().subscribe((res: Story[]) => {
      this.storiesForNotifications = res;
      console.log(this.storiesForNotifications); 
    });
    console.log(this.auth.getUserDetails().username);
  }
  
/*
* Swap value of checkVal, if changed to false set notificationShown to false
*/
  changeCheck() {
    if(this.checkVal === false) {
      this.checkVal = true;
    } else {
      this.checkVal = false;
      this.notificationsShown = false;
    }
  }

// Set value to show notifications to true
  showNotifications() {
    this.notificationsShown = !this.notificationsShown;
  }

// Hide notifications and route to story dashboard component
  goToStory(id : string) {
    this.notificationsShown = false;
    this._router.navigateByUrl('/dashboard/' + id);
  }

/*
* Change loading bar status based on current event
*/
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

// Keep track of where the user clicks
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

// Hide the notification container if user clicks on the page
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.notificationsShown = false;
    }
    this.wasInside = false;
  }
  
}
