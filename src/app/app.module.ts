import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/global/navbar/navbar.component';
import { FooterComponent } from './component/global/footer/footer.component';
import { PersonComponent } from './component/person/person.component';
import { PersonContainerComponent } from './component/person-container/person-container.component';
import { PartnerComponent } from './component/partner/partner.component';
import { PartnerContainerComponent } from './component/partner-container/partner-container.component';
import { SectionComponent } from './component/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PersonComponent,
    PersonContainerComponent,
    PartnerComponent,
    PartnerContainerComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
