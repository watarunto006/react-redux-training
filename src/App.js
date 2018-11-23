import React from 'react';

const App = () => {
  const profiles =  [
    {
      name: "太郎", age: 10
    },
    {
      name: "花子", age: 5
    },
    {
      name: "NoName"
    }
  ]
  return (<div>
    {
      profiles.map((profile, index) => {
        return <Usr name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>)
}

const Usr = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

Usr.defaultProps = {
  age: 1
}

export default App;
