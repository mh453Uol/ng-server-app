import {Component, OnInit} from '@angular/core';
import {Tree} from './models/tree.model';
import {Branch} from './models/branch.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  tree: Tree;

  constructor() {}

  ngOnInit() {
    this.tree = new Tree();
    this.tree.root = new Branch('0');
    const root = this.tree.root;

    root.left = new Branch('L');
    root.right = new Branch('R');
    // L1
    root.left.left = new Branch('LL');
    root.left.right = new Branch('LR');

    root.right.left = new Branch('RL');
    root.right.right = new Branch('RR');
    // L2
    root.left.left.left = new Branch('LLL');
    root.left.left.right = new Branch('LLR');

    console.log(root);

    this.tree.depthFirstSearch(root.left, root.right);
  }

}
