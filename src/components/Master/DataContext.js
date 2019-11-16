import React, { Component, createContext } from 'react';

export const DataContext = createContext();

class DataContextProvider extends Component {
    state = {
        contactData : {
            surname: 'FOOBAARR',
            name: 'BARBR',
            gender: '',
            prefix: '',
            mobile: '',
            email: '',
            country: '',
            city: '',
            address: '',
            postcode: '',
        }
    }

    render() {
        return (
            <DataContext.Provider value={{...this.state}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataContextProvider;
