import React from 'react';

class UserClass extends React.Component {
  props: { name: string; componentType: string; };
  state: { count: number; userInfo: { name: string, location: string } };
  setState: any;
  timmer: number;
  constructor(props: any) {
    super(props)
    console.log('props', props);
    this.state = {
      count: 0,
      userInfo: {
        name: 'name',
        location: 'default location',
      }
    }
    console.log(this.props.name+' child constructor');
  }

  async componentDidMount() {
    console.log(this.props.name+' child component did mount');
    const userData = await fetch('https://api.github.com/users/Nvinod007');
    const json = await userData.json()
    this.setState({
      userInfo: json,
    })

    this.timmer = setInterval(() => {
      console.log('I am interval');
    },1000)
  }

  componentDidUpdate() {
    console.log('component did update'); 
  }

  componentWillUnmount() {
    console.log('component will unmount');
    // If we dont have this line our interval will never get cleared
    // because it is single page application
    // Hence it will cause lag and give bad experience!
    clearInterval(this.timmer);
    
  }

  render() {
    console.log(this.props.name+' child render');

    const { name, componentType } = this.props;
    const { count, userInfo } = this.state;
    return (
      <div className='user-card'>
        <h1>Name: {userInfo.name}</h1>
        <h3>Job: software developer</h3>
        <h3>Qualification: BTech</h3>
        <h3>Location: {userInfo.location}</h3>
        <h3>Contact: vinodkumar.nelanakula@gmail.com</h3>
        <h3>Component type: {componentType}</h3>

        <h6>State Variable Count: {count}</h6>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Inc Count</button>
      </div>
    )
  }
}

export default UserClass