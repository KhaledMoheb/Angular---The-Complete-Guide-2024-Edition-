import { Component } from "@angular/core";

type LogData = {
  message: string;
  datetime: string;
};

@Component({
  selector: "app-details-log",
  templateUrl: "./details-log.component.html",
  styleUrl: "./details-log.component.css",
})
export class DetailsLogComponent {
  isDisplayingDetails: boolean = true;
  logs: LogData[] = [];

  get buttonText() {
    return this.isDisplayingDetails ? "Display Details" : "Hide Details";
  }

  onButtonClicked() {
    let logData: LogData = {
      message: this.isDisplayingDetails ? "Toggled Off" : "Toggled On",
      datetime: new Date().toString(),
    };
    this.logs = [logData, ...this.logs];
    this.isDisplayingDetails = !this.isDisplayingDetails;
  }

  getLogDataStyle(index: number) {
    return {
      'background-color': index >= 4 ? 'blue' : ''
    };
  }
  
  shouldApplyWhiteText(index: number) {
    return index >= 4;
  }
}
