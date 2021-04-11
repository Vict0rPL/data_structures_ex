


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this;
    }

    pop(){
        let popped = undefined
        if(this.length === 0){
            return undefined;
        } else if (this.length === 1) {
            popped = this.head
            this.head = null;
            this.tail = null;
            this.length = 0;
            return popped;
        }else{
            let current = this.head
            while(current){
                if(current.next.next === null){
                    popped = current.next
                    current.next = null
                    this.tail = current
                    this.length -= 1
                    return popped;
                    break;
                }else{
                    current = current.next;
                }   
            }
            
        }
    }

    values(){
        if(this.length === 0){
            return undefined
        } else{
            let arr = []
            let current = this.head
            while(current){
                arr.push(current.val)
                current = current.next
            }
            return arr;
        }
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }
        let currentHead = this.head
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter ++;
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        } else{
            return false;
        }
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !! this.push(val);
        if(index === 0) return !! this.unshift(val);

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length) return this.pop();
        if (index === 0) return this.shift();

        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--;
        return removed;
    }

    reverse(){
        if(this.length === 0) return false;
        let newSl = new SinglyLinkedList();
        const repeat = this.length
        for(var i = 0; i<repeat ; i++){
            let removedVal = this.pop().val
            newSl.push(removedVal)
        }
        for (var i = 0; i < repeat; i++) {
            let newVal = newSl.shift().val
            this.push(newVal)
        }        
        return this;
    }

}

let list = new SinglyLinkedList()
list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.push(1);
console.log(list)
// console.log(list.head.next.next)
// console.log(list.head.next.next.next)
console.log(list.values())
list.reverse()
console.log(list.values())