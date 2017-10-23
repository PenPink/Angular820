import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  private ID: string;
  private name: string;
  private nickname: string;
  private dob: string;
  private blood: string;
  private hobbies: string[];
  private email: string;

  constructor() { }

  ngOnInit() {
    this.ID = "58102010820"
    this.name ="Pattaranan Tuntaweesap"
    this.nickname = "Meji"
    this.dob = "21 July 1996"
    this.email = "pattaranan.meji@g.swu.ac.th"
    this.blood = "B"
    this.hobbies = ["see movies" , "read comic book"];
  }

}
