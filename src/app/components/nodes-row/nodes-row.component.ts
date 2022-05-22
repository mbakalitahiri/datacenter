import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { NgbModal, NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";

import { Node } from "src/app/interfaces/node.interface";

@Component({
  selector: "[app-nodes-row]",
  templateUrl: "./nodes-row.component.html",
  styleUrls: ["./nodes-row.component.css"],
})
export class NodesRowComponent implements OnInit, OnChanges {
  @Input() node: any;
  cpu: any;
  mem: any;

  currentNode!: Node;

  ngOnChanges(changes: SimpleChanges): void {
    let node = changes["node"]["currentValue"];
  }

  constructor(config: NgbProgressbarConfig, private _modalService: NgbModal) {
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = "primary";
    config.height = "20px";
  }

  ngOnInit(): void {}
  isDanger(prop: any) {
    return;
  }

  showModal(template: any, node: Node) {
    this.currentNode = node;

    this._modalService.open(template);
  }
}
