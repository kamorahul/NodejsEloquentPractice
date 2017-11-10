//Associate arrays:An array containing the elements with string based index.We can access 
   //using object.member
    var emp=[];
    emp["EmpNo"]=11404404;
    emp["Ename"]="Atif";
    emp["Sal"]=10000;
    emp["DeptNo"]=1;
   
    /*alert(emp["EmpNo"]+","+emp["Ename"]+","+emp["Sal"]+","+emp["DeptNo"]);*/
   // alert(emp.EmpNo+","+emp.Ename+","+emp.Sal+","+emp.DeptNo);

   console.log(emp.EmpNo+","+emp.Ename+","+emp.Sal+","+emp.DeptNo);

   //Creating object using new keyword
   var Emp1=new Object();
   Emp1.EmpNo=11403966;
   Emp1.Ename="Prajwal Singh";
   Emp1.Sal=20000
   Emp1.DeptNo=2;
   
   console.log(Emp1.EmpNo+","+Emp1.Ename+","+Emp1.Sal+","+Emp1.DeptNo);

   //Create object using braces(Object literals)
   
   var Emp2={};//hare Emp2 is literal
   Emp2.EmpNo=11406125;
   Emp2.Ename="Arpit Gautam";
   Emp2.Sal=10000
   Emp2.DeptNo=3;
   
   console.log(Emp2.EmpNo+","+Emp2.Ename+","+Emp2.Sal+","+Emp2.DeptNo);

   /*Creating object using object initializer.
       ->Inline object creation and initialization.
       ->Members can be added in place.
       ->Members:"Key-value" notation
   */

   var Emp3={
          EmpNo:11407198,
          Ename:"Reyaz",
          Sal:10000,
          DeptNo:4
   }
   console.log("assocaiate arrays:"+Emp3["EmpNo"]+","+Emp3["Ename"]+","+Emp3["Sal"]+","+Emp3 ["DeptNo"]);
  console.log("Using object MEmeber :"+Emp3.EmpNo+","+Emp3.Ename+","+Emp3.Sal+","+Emp3.DeptNo);
  
  //Displaying property and value
   var result="";
   for(var p in Emp3){
     result+= p + "=" + Emp3[p] + "\n";
    }
  console.log(result);
  
  //to display the keys of the object
  console.log(Object.keys(Emp3));//return the array of all the property names.Keys is a funtion  which goes through all the properties available in an object in the fprm of an array 
  
   var result="";
   var arr1=Object.keys(Emp3);
   for(var i=0;i<arr1.length;i++){
      result+=arr1[i]+" :"+Emp3[arr1[i]]+"  ";
   }
   console.log(result);



//////CONSTRUCTOR FUNCTIONS(INSTANCE OBJECTS)////////////////////////
/*->Describe the structure of an object
    ->Members are usually preceded with this
  ->Can also be anonymous
  ->We can instantiate "objects" from constructor functions
    ->using new keyword

*/

  function Emp4(cNo,cName,cSal,cDeptNo){
   this.cNo=cNo;
   this.cName=cName;
   this.cSal=cSal;
   this.cDeptNo=cDeptNo;
  }

  var myEmp=new Emp4(11404404,"Mohammad Atif",10000,1);

  console.log(myEmp.cNo+","+myEmp.cName+","+myEmp.cSal+","+myEmp.cDeptNo);


  //using associate index property to display and corresponding values.
  
  for(var p in myEmp){
    console.log(p + " :"+ myEmp[p]);
  }
  

 //using "with" to access object members."with" can only be used with objects.
  
  function showEmp(o){
  
  with(o){
     console.log(cNo.toString()+","+cName+","+cSal.toString()+","+cDeptNo.toString());
   }
  }
  showEmp(myEmp);


//////////METHODS IN OBJECTS/////////////////////
//external functions
function getAnnualSal(){
  return this.sal=12;
}

var Emp5={
  Ename:"Mohammad wasif",
  Age:25,
  AnnualSal:getAnnualSal
};

console.log(Emp5.Ename+" "+Emp5.Age+" "+Emp5.AnnualSal().toString());

//methods made available part of object
var Emp6={
  Ename:"Mohammad Atif",
  Sal:10000,

  AnnSal: function(){
    return this.Sal*12;
  },
  QuarterSal: function(){
     return this.Sal*3;
  }
};
console.log(Emp6.Ename + " earns "+Emp6.AnnSal() + "per annamum and earns "+Emp6.QuarterSal()+"per quarter");


//Anonymous Functions

var Emp7=function(name,sal){
  this.Ename=name,
  this.Sal=sal,

  this.getAnnSal= function(){
    return this.Sal*12;
  },
  this.getQuarterSal= function(){
     return this.Sal*3;
  }
};

var EmpDetails=new Emp7("Mohammad saqib",35000);
console.log("Annual Salaray :"+EmpDetails.getAnnSal());
console.log("Quarter Salaray :"+EmpDetails.getQuarterSal());



/*->Methods can accept parametsrs and return values.
    ->very similar to normal functions
   ->Methods can have objects as parametrs.
   ->Methods can return objects.

*/

var Emp8=function(){
  
  this.Ename="";
  this.Sal=0;
  
  this.setEmployee=function(o){
   this.Ename=o.Ename;
   this.Sal=o.Sal;
  };

  this.getAnnSal=function(){
    return this.Sal*12;
  };
};

var myDetails=new Emp8();
myDetails.Ename="John";
myDetails.Sal="1000000";

var myDetails1=new Emp8();
myDetails1.setEmployee(myDetails);

console.log(myDetails1.Ename + " earns "+myDetails1.getAnnSal());



/////////


var Emp9=function(eName,eSal){
  
  this.Ename=eName;
  this.Sal=eSal;
  
  this.getDetails1=function(){
  
   var s={
    Name: this.Ename,
    Salary:this.Sal,
    AnnSal: this.Sal*12
   };
   return s;
  }
};

var obj=new Emp9("Mamasita",50000);
console.log(obj.Ename +" earns "+obj.Sal);

var obj1=obj.getDetails1();
console.log(obj1.Name +" earns "+obj1.AnnSal);

console.log("Annual Salary :"+obj.getDetails1().AnnSal);


////ARRAY OF OBJECTS//////////////////


var Emp10=function(name,sal){
 this.Ename=name;
 this.Sal=sal;
 
 this.getAnnSal=function(){
  return this.Sal*12;
 };
};

var arrEmp=[];

arrEmp[0]=new Emp10("Raw",19898);
arrEmp[1]=new Emp10("Kohli",400000000);
arrEmp[2]=new Emp10("Rohit",83798);
arrEmp[3]=new Emp10("Rahane",734567);
arrEmp[4]=new Emp10("Bumrah",49893);

for(var i=0;i<arrEmp.length;i++){
 var d=arrEmp[i];
 console.log(d.Ename+" earns annulal slaray "+d.getAnnSal().toString());
}


////////////METHOD CHAINING//////////////////

var Emp11=function(vEmpNo,vName,vSal){
  this.EmpNo=vEmpNo;
  this.Name=vName;
  this.Sal=vSal;

  this.incrementSalary=function(yInc){
    this.Sal+=yInc;
    return this;
  }
};

var e2=new Emp11(111,"Sam",4500);

console.log(e2.Sal);

var e21=e2.incrementSalary(500);
e21.incrementSalary(500);

console.log(e2.Sal);

console.log(e2.incrementSalary(500).incrementSalary(500).incrementSalary(500).Sal);


////////////////////////////NESTED OBJECTS//////////////////////////

var Emp12={
 EmpNo:11,
 Ename:"Karan",
  
 Dept:{
  DeptNo:10,
  DeptName:"IT"
 }
};

console.log(Emp12.Ename + " works in "+Emp12.Dept.DeptName);



















































