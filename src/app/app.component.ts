import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  covidApi = "https://api.covid19api.com";
  covidSummary!: any;
  philippinesCovidCases!: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCovidData().subscribe((data: any) => {
      this.covidSummary = data;
      this.philippinesCovidCases = this.covidSummary.Countries.find(
        (x) => x.Country === "Philippines"
      );
    });
  }

  getCovidData() {
    const covidSummaryEndpoint = `${this.covidApi}/summary`;

    return this.http.get(covidSummaryEndpoint);
  }
}
