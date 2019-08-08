// <>里的K,和V就是我们定义的泛型，至于是什么类型，我们也不知道。但是当创建之后，key和value对应的类型就会更改成定义的类型。
class Node<K,V>{
    key:K;
    value:V;
}

export class HashMap<K,V> {
    
    // 声明一个Node的泛型数组，Node的类型根据HashMap的类型变化
    private nodes:Node<K,V> [] = [];
    
    // 新增到nodes里
    public put(key:K,value:V){
        let node:Node<K,V> = this.getNodeByKey(key);
        // null 就是当前数组里没有这个key的元素，反之就是有
        if(null == node){
            node = new Node<K, V>();
            node.key = key;
            node.value = value;
            this.nodes[this.nodes.length] = node;
        }else{
            // 当前nodes的value覆盖
            this.nodes[this.nodes.indexOf(node)].value = value;
        }
    }
    
    // 查询全部数据
    public queryAll(){
        return this.nodes;
    };
    
    // 根据key判断是否包含元素
    public containKey(key:K): boolean{
        let node = this.getNodeByKey(key);
        if(null == node){
            return false;
        }
        return true;
    };
    
    // 根据value获取key
    public getKey(value:V){
        let node = this.getNodeByValue(value);
        return node.key;
    }
    
    // 根据key获取value
    public getValue(key:K){
        let node = this.getNodeByKey(key);
        return node.value;
    }
    
    // 根据key获取node
    private getNodeByKey(key:K): Node<K,V>{
        let currentNodes = this.nodes;
        for (let i = 0; i < currentNodes.length; i++) {
            if(currentNodes[i].key == key){
                return currentNodes[i];
            }
        }
        return null;
    };
    
    // 根据value查询node
    private getNodeByValue(value:V): Node<K,V>{
        let currentNodes = this.nodes;
        for (let i = 0; i < currentNodes.length; i++) {
            if(currentNodes[i].value == value){
                return currentNodes[i];
            }
        }
        return null;
    };
    
    // 根据key移除元素
    public remove(key:K){
        let node = this.getNodeByKey(key);
        if(null != node){
            this.nodes.splice(this.nodes.indexOf(node),1);
        }
    }
    
}
