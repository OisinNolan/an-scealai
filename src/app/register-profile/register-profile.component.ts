import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthenticationService } from '../authentication.service'
import { Router } from '@angular/router';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})
export class RegisterProfileComponent implements OnInit {

  constructor(private profileService : ProfileService,
              private auth : AuthenticationService,
              private router : Router,
              private ts : TranslationService) { }

  input : string;
  showError : boolean;

  genders : string[] = [
    this.ts.l.male,
    this.ts.l.female,
    this.ts.l.non_binary,
    this.ts.l.prefer_not_say
  ];

  gender : string = this.genders[0];

  ages : string[] = [
    "6-9",
    "10-19",
    "20-29",
    "30-39",
    "40-49",
    "50-59",
    "60-69",
    "70-79",
    "80+",
  ];

  age : string = this.ages[0];

  counties : string[] = [
    "Baile Átha Cliath",
    "Contae Átha Cliath",
    "Contae an Chabháin",
    "Contae Cheatharlach",
    "Contae Chiarraí­",
    "Contae Chill Chainnigh",
    "Contae Chill Dara",
    "Contae Chill Mhantáin",
    "Contae an Chláir",
    "Contae Chorcaí­",
    "Contae Dhún na nGall",
    "Contae na Gaillimhe",
    "Contae na hIarmhí­",
    "Contae Laoise",
    "Contae Liatroma",
    "Contae Loch Garman",
    "Contae an Longfoirt",
    "Contae Lú",
    "Contae Luimnigh",
    "Contae Mhaigh Eo",
    "Contae na Mí­",
    "Contae Mhuineacháin",
    "Contae Phort Láirge",
    "Contae Ros Comáin",
    "Contae Shligigh",
    "Contae Thiobraid Árann",
    "Contae Uí­bh Fhailí­",
    "Béal Feirste",
    "Contae Aontroma",
    "Contae Ard Mhacha",
    "Contae Dhoire",
    "Contae an Dúin",
    "Contae Thír Eoghain",
    "Contae Fhear Manach",
  ];

  county : string = this.counties[0];

  notFromIreland : boolean = false;

  country : string;

  schools : string[] = [
    this.ts.l.english_school,
    this.ts.l.gaelscoil,
    this.ts.l.gaeltacht_school,
    this.ts.l.school_not_in_ireland,
  ];

  school : string = this.schools[0];

  nativeSpeakerStatuses : string[] = [
    this.ts.l.yes,
    this.ts.l.no,
    this.ts.l.bilingual_native,
    this.ts.l.bilingual_other,
  ];

  nativeSpeakerStatus : string = this.nativeSpeakerStatuses[0];

  dialectPreferences : string[] = [
    this.ts.l.gaeilge_uladh,
    this.ts.l.gaeilge_chonnacht,
    this.ts.l.gaolainn_na_mumhan,
    this.ts.l.other,
  ];

  dialectPreference : string = this.dialectPreferences[0];

  spokenComprehensionLevels : string[] = [
    this.ts.l.comprehension_level_1,
    this.ts.l.comprehension_level_2,
    this.ts.l.comprehension_level_3,
    this.ts.l.comprehension_level_4,
    this.ts.l.comprehension_level_5,
  ];

  spokenComprehensionLevel : string = this.spokenComprehensionLevels[0];

  cefrLevels : string[] = [
    this.ts.l.unknown,
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2",
  ];

  cefrLevel : string = this.cefrLevels[0];

  howOftenOptions : string[] = [
    this.ts.l.every_day,
    this.ts.l.every_week,
    this.ts.l.few_times_a_month,
    this.ts.l.hardly_ever,
  ];

  speakingFrequency : string = this.howOftenOptions[0];

  speakWithOptions : string[] = [
    this.ts.l.learners_and_natives,
    this.ts.l.natives,
    this.ts.l.learners,
  ];

  speakWith : string = this.speakWithOptions[0];

  irishMedia = {
    rnag : false,
    tg4 : false,
    bbcUladh : false,
    rnalife : false,
    radioRiRa : false,
    socialMedia : false
  };

  howOftenMedia : string = this.howOftenOptions[0];

  howOftenReading : string = this.howOftenOptions[0];

  howOftenWriting : string = this.howOftenOptions[0];

  irishMediaChecked() : boolean {
    return (this.irishMedia.bbcUladh
      || this.irishMedia.radioRiRa
      || this.irishMedia.rnag
      || this.irishMedia.rnalife
      || this.irishMedia.socialMedia
      || this.irishMedia.tg4);
  }

  irishReading = {
    newspapers : false,
    socialMedia : false,
    books : false,
  };

  irishReadingChecked() : boolean {
    return (this.irishReading.newspapers
      || this.irishReading.books
      || this.irishReading.socialMedia);
  }

  irishWriting = {
    email : false,
    socialMedia : false,
    blog : false,
    teachingMaterial : false,
    articles : false,
    shortStories : false,
    books : false,
    poetry : false,
  }

  irishWritingChecked() : boolean {
    return (
      this.irishWriting.articles
      || this.irishWriting.blog
      || this.irishWriting.books
      || this.irishWriting.email
      || this.irishWriting.poetry
      || this.irishWriting.shortStories
      || this.irishWriting.socialMedia
      || this.irishWriting.teachingMaterial
    );
  }

  synthOpinions : string[] = [
    this.ts.l.synth_opinion_1,
    this.ts.l.synth_opinion_2,
    this.ts.l.synth_opinion_3,
    this.ts.l.synth_opinion_4,
    this.ts.l.synth_opinion_5,
  ];

  synthOpinion : string = this.synthOpinions[0];

  ngOnInit() {
  }

  saveDetails() {
    let profile = {
      userId : this.auth.getUserDetails()._id,
      gender : this.gender,
      age : this.age,
      county : (!this.notFromIreland) ? this.county : null,
      notFromIreland : this.notFromIreland,
      country : (this.notFromIreland) ? this.country : "Ireland",
      school : this.school,
      nativeSpeakerStatus : this.nativeSpeakerStatus,
      dialectPreference : this.dialectPreference,
      spokenComprehensionLevel : this.spokenComprehensionLevel,
      cefrLevel : this.cefrLevel,
      speakingFrequency : this.speakingFrequency,
      speakWith : this.speakWith,
      irishMedia : this.irishMedia,
      irishReading : this.irishReading,
      irishWriting : this.irishWriting,
      howOftenMedia : this.howOftenMedia,
      howOftenReading : this.howOftenReading,
      howOftenWriting : this.howOftenWriting,
      synthOpinion : this.synthOpinion,
    };
    this.profileService.create(profile).subscribe((res) => {
      this.router.navigateByUrl('/contents');
    })
  }

}