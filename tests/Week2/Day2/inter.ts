

interface User {
    name: string;
    age: number;
    isAdmin: boolean;


}



class Employees implements User {
    name: string;
    age: number;
    isAdmin: boolean;

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }   

}

let emp3 = new Employees("Kumar", 25, true);
console.log(emp3);