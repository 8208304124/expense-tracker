let names=[];
let date=[];
let amount=[];
const input=document.getElementById("input");
const idate=document.getElementById("idate");
const inumber=document.getElementById("inumber");
const tbody=document.getElementById("table");
const leadsFromLocalStorage1 = JSON.parse(localStorage.getItem("names"));
const leadsFromLocalStorage2 = JSON.parse(localStorage.getItem("date"));
const leadsFromLocalStorage3 = JSON.parse(localStorage.getItem("amount"));

if (leadsFromLocalStorage1 && leadsFromLocalStorage2 && leadsFromLocalStorage3) {
    names = leadsFromLocalStorage1;
    date=leadsFromLocalStorage2;
    amount=leadsFromLocalStorage3;
    display(names,date,amount);
}

function add(){
     if(input.value =="" || idate.value=="" || inumber.value=="")
    return alert("Please Enter Details");
names.push(input.value);
date.push(idate.value);
amount.push(inumber.value);
localStorage.setItem("names", JSON.stringify(names) );
localStorage.setItem("date", JSON.stringify(date) );
localStorage.setItem("amount", JSON.stringify(amount) );
input.value="";
idate.value="";
inumber.value="";
display(names,date,amount);
console.log(names,date,amount);
}

function display(array1,array2,array3)
{
    let list=`<thead>
    <tr style="background-color: #3A9188;">
        <th>Name</th>
        <th>Dates</th>
        <th>Amounts</th>
        <th></th>
    </tr></thead>
`;
 
  for(let i=0;i<array1.length;i++)
  {
     list +=` <tr id="k">
     <td>${array1[i]}</td>
     <td>${array2[i]}</td>
     <td>${array3[i]}</td>
     <td>  <button class="close" onclick="remove(${i})">x</button></li></td>
     </tr>`;
  }
  if(array1.length==0){
    list +=`
    <tr>
     <td></td>
     <td>The Fields are Empty</td>
     <td></td>
     <td> </td>
     </tr> `
}
 tbody.innerHTML=list;
}

function remove(p){
    names.splice(p,1);
    date.splice(p,1);
    amount.splice(p,1);
    localStorage.setItem("names", JSON.stringify(names) );
    localStorage.setItem("date", JSON.stringify(date) );
    localStorage.setItem("amount", JSON.stringify(amount) );
    display(names,date,amount);  
}
