import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet.',
        imgSrc: 'src/assets/image/image.webp',
        profession: 'Software Developer'
      },
      show: false,
      intervalId: null,
      mountedAt: null
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000);

    this.setState({ intervalId, mountedAt: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedAt } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Avatar" />
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Mounted at: {mountedAt && mountedAt.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
