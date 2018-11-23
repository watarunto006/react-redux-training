import React from 'react';
import PropTypes from'prop-types';

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
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>)
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
