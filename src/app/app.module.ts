import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterFormComponent} from './user/register-form/register-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EmailFormComponent} from './admin/email-form/email-form.component';
import {EmailService} from './shared/email.service';
import {ListFeedbackComponent} from './admin/list-feedback/list-feedback.component';
import {PlayerComponent} from './music/player/player.component';
import {MatCardModule, MatDialogModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {FeedbackComponent} from './user/feedback/feedback.component';
import {FeedbackService} from './shared/feedback.service';
import {HomepageComponent} from './homepage/homepage.component';
import {FooterComponent} from './homepage/footer/footer.component';
import {HeaderComponent} from './homepage/header/header.component';
import {MainComponent} from './homepage/main/main.component';
import {MusicComponent} from './music/music.component';
import {ManageMusicComponent} from './admin/manage-music/manage-music.component';
import { LoginComponent } from './login/login.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AuthService } from './auth/auth.service';
// import {NavbarHeaderComponent} from './navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    EmailFormComponent,
    PlayerComponent,
    ListFeedbackComponent,
    AdminComponent,
    UserComponent,
    FeedbackComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    MusicComponent,
    ManageMusicComponent,
    LoginComponent,
    // NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  entryComponents: [
    FeedbackComponent,
    EmailFormComponent
  ],
  providers: [
    AuthService,
    EmailService,
    FeedbackService,
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
