import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SettingComponent } from './pages/setting/setting.component';
import { BodyComponent } from './pages/body/body.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './pages/body/home/home.component';
import { AboutusComponent } from './pages/body/aboutus/aboutus.component';
import { ProjectsComponent } from './pages/body/projects/projects.component';
import { ContactusComponent } from './pages/body/contactus/contactus.component';
import { ProgrammingComponent } from './pages/body/projects/programming/programming.component';
import { LightingComponent } from './pages/body/projects/lighting/lighting.component';
import { MessageboxComponent } from './pages/messagebox/messagebox.component';
import { NotfoundComponent } from './pages/body/notfound/notfound.component';
import { LoadingComponent } from './pages/loading/loading.component';

export function createtranslateloader(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingComponent,
    BodyComponent,
    HomeComponent,
    AboutusComponent,
    ProjectsComponent,
    ContactusComponent,
    ProgrammingComponent,
    LightingComponent,
    NotfoundComponent,
    MessageboxComponent,
    LoadingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:createtranslateloader,
        deps:[HttpClient],
      }
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
