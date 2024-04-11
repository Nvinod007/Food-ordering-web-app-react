import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props) {
    super(props)
    // console.log('parent constructor');
  }

  componentDidMount() {
    // console.log('parent component did mount');
  }

  render() {
    // console.log('parent render');

    return (
      <div>About
        <h1>This is about app</h1>
        <h2>don't you know about this?</h2>
        <UserClass
          name={'vinod kumar'}
          componentType={'Class'} />
        {/* <User
          name={'VK'}
          componentType={'Class'} /> */}
      </div>
    )
  }
}

// // functional component
// const About = () => {
//   return (
//     <div>About
//       <h1>This is about app</h1>
//       <h2>don't you know about this?</h2>
//       <User
//         name={'vinod kumar'}
//         componentType={'Functional'} />
//       {/* below is class based component */}
//       <UserClass
//         name={'vinod kumar'}
//         componentType={'Class'} />
//     </div>
//   )
// }

export default About