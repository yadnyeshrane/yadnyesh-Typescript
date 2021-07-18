export{}
let message="welcome back";
console.log(message);

//variable Declartion

let isBiggner:boolean=true;
let num:number=0;
let name:string="vishwas";
 name="kiran";

// name=true Error booleans is not assingnable to type string
// String literals

let sentence:string=`My anme is ${name} and i m just a nioob in js`;

console.log(sentence);

//Null and udnefined type in js

let n:null=null;
let u:undefined=undefined;

let isNew:boolean=null;
let myname:string=undefined


//Array t7ype
let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,34];

console.log(list1);


//tuple Type

let person1:[string, string,number]=['chr9os','jordan',9];
console.log('the perosn 1', person1)

//enum type
// By default  it start with zer0
enum Color{Red,Green,Orange};
let c:Color=Color.Green;
console.log(c);

// enum Color1{Red=5,Green,Orange};
// let c1:Color=Color1.Green;
// console.log(c1);  


// Type=Any
//we acan used for bascially handling any dynmic data
let myVars:any=10;
// console.log(myVars.name)
// myVars();
// console.log(myVars.findof())

// ..unknow
//It is same of unknow nt the basix didderence is that u cant acess any propery like touppacarse, or nor u can call it as of like method or u can call its is like a function

let myvars:unknown=10;

//Type assertion so that we xan convience we know bettwer it is similary typecasting to other langauges

// (myVars as string).toLowerCase();  

//Type imnfermce does not workm on initialization
let a;
a=10;
a=true;

// let b=20;
// b=false;

// Union of Type for SafeArray,e vaibale
let multipleType:number|boolean;
multipleType=230;
multipleType=true
// multipleType="abc" It will throw aan eerror 



//Functions


function add(num1:number,num2:number):number
{
    return num1+num2;
}
add(4,5);


//function with optional paratmer
//the optioanl p[aeramter shoudl be placed at the last 

function adds( num2:number,num1?:number)
{
    if(num1)
    {
        return num1+num2;
    }
    else{
        return num2;
    }
    
}
const vals:number=adds(11,12)
console.log(vals)


// /default VREyeParameters

function addson(num1:number, nums2:number=10)
{
    if(nums2)
    {
        return num1+nums2;
    }
    else{
        return num1;
    }
}

const vals1=addson(10,70);
console.log(vals1);


//object a s fubnction

//interfaces
interface Person{
firstname:String,
lastname?:String
}
//the question mark defines the optional  badically used for input fileds as not all fields are compulsary
function fullName(person:Person)
{
    console.log(`the ${person.firstname} and the smaller name is ${person.lastname}`);
}



let p={
    firstname:'ram',
    // lastname:'sham',
}
fullName(p);

//clasess
class Emp{
    emp:string;
    constructor(name:string)
    {
       this.emp=name;
    }
    greet()
    {
        console.log(`hey good morning ${this.emp}`);
    }
}

let e1= new Emp('vishwas gopinath');
console.log(e1.emp);
e1.greet();

//ingheritance

class Manager extends Emp{
    constructor(mname:string)
    {
super(mname);
  }
  delegateWork()
  {
      console.log( `manageer dkeeteing work`)
  }
}

let m2=new Manager('vishwas gupta');
m2.delegateWork();
m2.greet();
