


abstract class Abs{
    abstract display():void;
}


class Child extends Abs{
    display(): void {
        console.log("This is the implementation of the abstract method");
    }   
}

let cccc = new Child();
cccc.display();