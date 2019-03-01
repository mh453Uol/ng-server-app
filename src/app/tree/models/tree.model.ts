import {Branch} from './branch.model';

export class Tree {
    root: Branch;

    traverse() {
        // this.depthFirstSearch(this.root.left, this.root.right);
        this.preorder(this.root);
    }

    // postorder (Left, Right, Root)
    depthFirstSearch(left: Branch, right: Branch) {
        if (left != null) {
            this.depthFirstSearch(left.left, left.right);
            console.log(left.label);
        }

        if (right != null) {
            this.depthFirstSearch(right.left, right.right);
            console.log(right.label);
        }
    }

    // inorder (Left, Root, Right)
    preorder(branch: Branch) {
        if (branch != null) {
            this.preorder(branch.left);
            this.preorder(branch.right);
            console.log(branch.label);
        }
    }


}
