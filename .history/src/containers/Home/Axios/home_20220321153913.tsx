import React from 'react';
import axios from 'axios';

export default class JobList extends React.Component {
  state = {
    jobs: Number
  }

  componentDidMount() {
    axios.get(`https://6238236700ed1dbc5aaedc08.mockapi.io/api/jobs`)
      .then(res => {
        const jobs = res.data.count;
        this.setState({ jobs });
      })
  }

  render() {
    return (
        <p>
          Welcome to Faba onboarding project - Job board {this.state.jobs}
        </p>
    )
  }
}