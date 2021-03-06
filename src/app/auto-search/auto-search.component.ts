import { Component, OnInit } from "@angular/core";
import { AutoService, IAutos } from "../services/auto.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auto-search",
  templateUrl: "./auto-search.component.html",
  styleUrls: ["./auto-search.component.css"]
})
export class AutoSearchComponent implements OnInit {
  Autos: IAutos;
  searchName: string;
  searchID: number;
  constructor(private autoSrvc: AutoService, private auth: AuthService) {}

  ngOnInit() {}

  getAutoById() {
    return this.autoSrvc
      .getAuto(this.searchID)
      .subscribe(data => (this.Autos = data));
  }
  getMerk() {
    return this.autoSrvc
      .getMerk(this.searchName)
      .subscribe(data => (this.Autos = data));
  }

  get SearchID() {
    return this.searchID;
  }
  set SearchID(value: number) {
    this.searchID = value;
    this.getAutoById();
  }
  get SearchName() {
    return this.searchName;
  }
  set SearchName(value: string) {
    this.searchName = value;
    this.getMerk();
  }
}
