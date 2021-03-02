declare let x: string;
declare let arrawFuntio: () => void;
declare class Student {
    private _id;
    private _name;
    constructor(id: number, name: string);
    get id(): number;
    set id(value: number);
    get name(): string;
    set name(name: string);
}
declare let student: Student;
declare let promise: Promise<unknown>;
declare let money: number;
declare const buyCar: (car: any) => Promise<unknown>;
declare const promise1: Promise<void>;
