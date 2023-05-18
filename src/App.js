import React, { Component } from 'react';


class App extends Component {
  state = {
    person: {
      fullName: 'Daniel Oluwaseun Obamuyi',
      bio: "I'm a web developer.",
      imgSrc: './profile-image.jpg',
      profession: 'Software Engineer',
    },
    show: false,
    intervalId: null,
    elapsedTime: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(this.updateElapsedTime, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateElapsedTime = () => {
    this.setState((prevState) => ({
      elapsedTime: prevState.elapsedTime + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="Profile" style={styles.image} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

const styles = {
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  },
};

export default App;
