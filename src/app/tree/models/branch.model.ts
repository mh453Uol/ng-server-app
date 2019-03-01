export class Branch {
    label: string;
    left: Branch;
    right: Branch;

    constructor(label: string) {
        this.label = label;
        this.left = null;
        this.right = null;
    }
}
