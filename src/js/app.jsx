import React from 'react';
import CityInfo from './components/cityInfo';
import SearchBar from './components/searchBar';
import SearchHistory from './components/searchHistory';
import Tabs from './components/tabs';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h2 className='display-2 p-4'>
            Weather Application
          </h2>
          <h6 className='lead p-4'>
            Always Know the Weather!
          </h6>
        </div>
        <Tabs />
        <SearchBar />
        <div className='row'>
          <div className='col-6'>
            <CityInfo />
          </div>
          <div className='col-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  };
};
