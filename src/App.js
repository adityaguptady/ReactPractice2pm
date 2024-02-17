
import React from 'react';
import './App.css';

//Functional Component
// const App = () =>
// {

//   let firstVariable = 5
//   console.log("firstVariable: "+firstVariable)
//   firstVariable = 6
//   console.log("firstVariable: "+firstVariable)

//   const secondVariable = "abc"
//   console.log("secondVariable: "+secondVariable)
//   //secondVariable = "def"
//   //console.log("secondVariable: "+secondVariable)

//   var thirdVariable = true
//   console.log("thirdVariable: "+thirdVariable)
//   thirdVariable = false
//   console.log("thirdVariable: "+thirdVariable)

//   //CAMEL CASING  
//   // variable = myVariableName, studentDetailsvariable
// //function = Variable conventions + () | myFunction(), studentDetailsFunction()
// //Class = MyClass, StudentDetails
// //Constant = STUDENT_DETAILS 

//   const functionArgument = () =>
//   {
//     console.log("This is my functionArgument!!")
//     return false
//   }

//   const myFunction1 = (variable) =>
//   {
//     console.log(variable)
//     console.log("This is my function 11!!")
//     if(variable())
//     {
//       console.log("the condition is true")
//     }
//     else
//     {
//       console.log("the condition is false")
//     }
//   }

//   //myFunction()

//   myFunction1(functionArgument)

//   class Student
//   {
//     id 
//     name
//     rollNumber
//     address
//     emailID

//     constructor(id, tempName, tempRoll, tempAddress, tempEmail)
//     {
//       this.id = id
//       this.name = tempName
//       this.rollNumber = tempRoll
//       this.address = tempAddress
//       this.emailID = tempEmail
//     }

//     print()
//     {
//       console.log("id", this.id)
//       console.log("name", this.name)
//       console.log("rollNumber", this.rollNumber)
//       console.log("address", this.address)
//       console.log("emailID", this.emailID)
//     }
//   }

//   const student1 = new Student(123, "Nikita", 111, "trcyvubnmhj uyvugyuiyg ig")
//   student1.print()
//   // student1.id = 123
//   // student1.name = "Nikita"
//   // student1.rollNumber = 111
//   // student1.address = "trcyvubnmhj uyvugyuiyg ig"
//   // student1.emailID = "abc@ekfbn.ien"
//   //student1.print()

//   class Monitor extends Student
//   {
//     batch

//     constructor(batchTemp, id, tempName, tempRoll, tempAddress, tempEmail)
//     {
//       super(id, tempName, tempRoll, tempAddress, tempEmail)
//       this.batch = batchTemp
//     }

//     print()
//     {
//       super.print()
//       console.log("Batch: "+this.batch)
//     }
//   }

//   let ravi = new Monitor("2-3pm", 222, "Ravi Prakash", 1234, "kwjhb efub", "ravi@gmail.com")
//   console.log("ravi: ", ravi)
//   ravi.print()

//   let variable = <div>Hello world, how are you?</div>

//   return createElement("div", null, "Hello")
// }


//Class component
// class App extends React.Component
// {

//   buttonClickHandle()
//   {
//     console.log("Clicked the button!!!")
//     console.log(this.buttonClickHandle)
//   }

//   render()
//   {
//     return <div>
//       <p>
//         <ol>
//           <li>List 1</li>
//           <li>List 2</li>
//           <li>List 3</li>
//         </ol>

//         <button onClick={() => this.buttonClickHandle()} disabled="true">Click me!</button>

        

//       </p>
//     </div>
//   }
// }

// const App = (props) =>
// {
//   console.log("Props: ", props)
//   console.log("Props color: ", props.color)// color
//   console.log("Props size: ", props.size)// size
//   console.log("clickEvent:", props.clickEvent)
//   return <div style={{backgroundColor:props.color}}>
//     This is App component
//     <button onClick={props.clickEvent}>Click me</button>
//     </div>
// }

class App extends React.Component
{
  state = {
    counter: 0,
    component: <ChildComponent/>
  }

  constructor(props)
  {
    super(props)
    console.log("Constructor of App component")
  }

  static getDerivedStateFromProps()
  {
    console.log("getDerivedStateFromProps")
  }

  incrementCounter = () =>
  {
    this.setState({counter:this.state.counter + 1})
  }

  componentDidMount()
  {
    console.log("componentDidMount")
  }

  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("getSnapshotBeforeUpdate")
    return true
  }

  componentDidUpdate()
  {
    console.log("componentDidUpdate")
  }

  //color = "orange"

  unmountChild = () =>
  {
    this.setState({
      counter: this.state.counter,
      component: "The child component is gone/unmounted"
    })
  }
  render()
  {
    console.log("render method")
    return <div style={{backgroundColor: this.props.color}}>
        Hello
        <button onClick={this.props.clickEvent}>Click me</button><br/>
        --------------<br/>
        Counter: {this.state.counter}

        <button onClick={this.incrementCounter}>Increment counter</button>
        <br/>
        Mounting Child component <br/>
        ------------------------<br/>
        {/* <ChildComponent/><br/> */}
        {this.state.component}
        ------------------------<br/>
        <button onClick={this.unmountChild}>Unmount Child Component</button>
      </div>
  }
}

class ChildComponent extends React.Component
{
  componentWillUnmount()
  {
    console.log("Unmounting Child component")
  }

  render()
  {
    return <div>This is my Child Component</div>
  }
}
export default App;
