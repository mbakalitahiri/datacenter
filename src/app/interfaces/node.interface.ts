import { Metric } from "./metric.interface";

export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
