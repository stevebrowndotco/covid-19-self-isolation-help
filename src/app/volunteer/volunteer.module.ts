import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VolunteerPageRoutingModule } from "./volunteer-routing.module";

import { VolunteerPage } from "./volunteer.page";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireFunctions } from "@angular/fire/functions";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, VolunteerPageRoutingModule],
  declarations: [VolunteerPage],
  providers: [AngularFirestore, AngularFireAuth, AngularFireFunctions],
})
export class VolunteerPageModule {}
