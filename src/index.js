import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spnear';

class App extends React.Component {


    state = {latitude: null, errorMessage: '', time: ''};

    componentDidMount() {



        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);

                this.setState({latitude: position.coords.latitude});
            },
            error => {
                this.setState({errorMessage: error.message})
            }
        );

        setInterval(() => this.setState({ time: new Date().toLocaleTimeString()}), 1000);

    }


    render() {

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} time={this.state.time}/>;
        } else if (this.state.errorMessage && !this.state.latitude) {
            return (<div>Error: {this.state.errorMessage} </div>)
        } else {
            return <Spinner messages='Please allow access location...'/>;
        }


    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

