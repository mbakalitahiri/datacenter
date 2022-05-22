import { Component, OnDestroy, OnInit } from "@angular/core";

import { Metric } from "./../../interfaces/metric.interface";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  //For metric component
  cpu!: Metric;
  mem!: Metric;

  //For cluster component
  cluster1!: Node[];
  cluster2!: Node[];
  cluster3!: Node[];
  cluster4!: Node[];
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.generateData();
    //generate new set of data every 15 seconds
    this.interval = setInterval(() => {
      this.generateData();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  // Rellena los cluster 1 y 2 con datos para  cada node row
  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cluster3 = [];
    this.cluster4 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    //relleno datos para primer cluster
    for (let i: number = 1; i < 4; i++) this.cluster1.push(this.randomNode(i));
    //relleno datos para el segundo cluster
    for (let i = 4; i < 7; i++) this.cluster2.push(this.randomNode(i));
    //relleno datos para el segundo cluster
    for (let i = 7; i < 10; i++) this.cluster3.push(this.randomNode(i));
    //relleno datos para el segundo cluster
    for (let i = 10; i < 13; i++) this.cluster4.push(this.randomNode(i));
  }

  private randomNode(i: any): any {
    let node = {
      name: "node" + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) },
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
