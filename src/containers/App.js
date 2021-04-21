import React, { useState} from 'react';
//import Radium from 'radium';
import Employees from '../components/Employees/Employees';
import './App.css';
//import '../components/Char/Char.css';
// import Validation from '../components/Validadtion/Validation';
// import Chars from '../components/Chars/Chars';
// import Char from '../components/Char/Char';



const App = () =>  {
 // const [userState, setUserState] = useState({username:"finish"});
  const [EmployeesList, setEmployeesList] = useState(
    fetchEmployees()
  );
 function fetchEmployees(){
   let emp = [
     {'userName':'user01','fName':'Moshe', 'lName':'Cohen','position':'Manager',
   'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
   'Reports':[],
   'Manager':'',
   'Subordinates':['uzer10','uzer11','uzer12','uzer13','uzer14']},
  {'userName':'uzer10','fName':'Yael', 'lName':'Levy','position':'Manager',
'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
'Reports':[],
'Manager':'user01',
'Subordinates':['uzer30','uzer31']},
 {'userName':'uzer11','fName':'Guy', 'lName':'Levin','position':'Employee',
 'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
 'Reports':[],
 'Manager':'user01',
 'Subordinates':[]},
 {'userName':'uzer12','fName':'Shlomo', 'lName':'Rotem','position':'Employee',
 'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
 'Reports':[],
  'Manager':'user01',
'Subordinates':[]},
 {'userName':'uzer13','fName':'Yosef', 'lName':'Lahav','position':'Employee',
 'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
 'Reports':[],
 'Manager':'user01',
'Subordinates':[]},
 {'userName':'uzer14','fName':'Nira', 'lName':'Levy','position':'Employee',
 'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
 'Reports':[],
 'Manager':'user01',
'Subordinates':[]},
 {'userName':'uzer30','fName':'David', 'lName':'Levi','position':'Employee',
 'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
 'Reports':[],
 'Manager':'user10',
'Subordinates':[]},
 {'userName':'uzer31','fName':'Ron', 'lName':'German','position':'Employee',
 'Tasks':[{'task':'aaaa','dueDate':'23/12/21'},{'task':'bbbbb','dueDate':'18/02/21'}],
 'Reports':[],
 'Manager':'user10',
'Subordinates':[]} 
  ]; 
  
  console.log(emp);
   return emp;
 }
function emplyoyeesChangedHandler(event){
  setEmployeesList(event.terget.value);
}

   return (
    
    <div className="app">
     <h1>My First Assignment!</h1>
     <Employees users={EmployeesList} changed={emplyoyeesChangedHandler}></Employees>
    </div>
  );
}
export default App;
/* class App extends Component {
state = {
  Value:""
}
const [EmployeesList, setEmployeesList] = useState('');
deleteCharHandler = (index)=>{
const str = this.state.Value;
let res = this.removeCharByIndex(str, index);
document.getElementById("str").value = res;
this.setState(
{Value:res}
);

}
 removeCharByIndex = (str, index) => {
   if(str !== ""){
let str1 = '' + str.substring(0, index);
let str2 = '' + str.substring(index+1, str.length);
str =  str1+str2;
}
return str;
}
changeValueHandler = (event)=>{
   this.setState({
     Value:event.target.value
   });
   console.log(this.state.Value);
}
 
  insertMapping = (vals) => {
   vals.map((val,index) => {
     return <Char 
     vchar = {val}   
     ></Char>
  })}

  render() {
    return (
      <div className="App">
       
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
<div>
Enter Input
</div>
<p>
<input id="str" type="text"
 onKeyUp={this.changeValueHandler} >
 </input>
</p>
<Validation Change={[...this.state.Value]}>
</Validation>
<Chars 
chars={[...this.state.Value]}
delete = {this.deleteCharHandler}
 />
      </div>
    );
 }


} */

//export default Radium(App);
//export default App;
