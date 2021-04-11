class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }


    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return false;
    }

    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFS(){
        let data = [];
        const traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSO() {
        let data = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}

let tree = new BinarySearchTree();

tree.insert(9)
tree.insert(10)
tree.insert(8)
tree.insert(2)
tree.insert(25)
tree.insert(1)
tree.insert(95)
tree.insert(50)
tree.insert(5)

console.log(tree.DFS())
