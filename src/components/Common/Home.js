import React, {Component} from 'react';

//import CarCarousel from './CarCarousel';
//import OtaSpaDatePicker from './../OtaSpaDatePicker';
import SearchBar from './SearchBar';
//import AirlineFlasher from './AirlineFlasher';

//import PriceMap from './PriceMap';


class Home extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked text');
    }

    render() {


        return (

            <div>
                <SearchBar/>



            </div>

        );
    }
}

export default Home;


