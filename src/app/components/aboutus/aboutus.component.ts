import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  private anime1 :string;
  private anothor1 :string;
  private anime2 :string;
  private anothor2 :string;
  private anime3 :string;
  private anothor3 :string;
  private anime4 :string;
  private anothor4 :string;
  constructor() { }

  ngOnInit() {
    this.anime1 = "Natsume Yuujinchou";
    this.anothor1 = "Yuki Midorikawa";
    this.anime2 = "Seraph of the End";
    this.anothor2 = "Takaya Kagami";
    this.anime3 = "Nurarihyon no Mago";
    this.anothor3 = "Hiroshi Shiibashi";
    this.anime4 = " Detective Conan";
    this.anothor4 = "Gosho Aoyama";
  }

}
