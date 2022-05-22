import { Component, Input, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import { Label, ThemeService } from "ng2-charts";

import * as chart from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit {
  ngOnInit(): void {}

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      //you're missing this
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Usage",
          },
          ticks: {
            stepSize: 10,
            max: 100,
            min: 0,
          },
        },
      ],
    }, //END scales
  };
  @Input() barChartLabels: Label[] = [];
  public barChartType: ChartType = "bar";
  public barChartLegend = false;
  public barChartPlugins = [];

  @Input() barChartData: any[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
  ];

  // @Input() pieChartLabels: any[] = [];
  // @Input() pieChartData: SingleDataSet = [];
}
