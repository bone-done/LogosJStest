function makeBuffer(){
    let str = "";
    return {
        add: string => {
            str += string;
        }, 
    
        print: () => {
            return str;
        },
        
        clear: () => {
            str = "";
        }
    }
}


var buffer = makeBuffer();
buffer.add('JavaScript');
buffer.add(' Вчити');
buffer.add(' Потрібно!');
console.log(buffer.print());

var buffer2 = makeBuffer();
buffer2.add(0);
buffer2.add(1);
buffer2.add(0);
console.log(buffer2.print());

var buffer3 = makeBuffer ();
buffer3.add("Тест");
buffer3.add(" тебе не з'їсть");
console.log(buffer3.print());
buffer3.clear ();
console.log(buffer3.print());

