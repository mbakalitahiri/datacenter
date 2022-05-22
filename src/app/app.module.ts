import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MetricComponent } from "./components/metric/metric.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgModule } from "@angular/core";
import { NodesComponent } from "./components/nodes/nodes.component";
import { NodesRowComponent } from "./components/nodes-row/nodes-row.component";
import { ChartComponent } from "./components/chart/chart.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
