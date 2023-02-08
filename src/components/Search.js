import React, { Component } from 'react';

class Search extends Component {

state = {artistQuery: ''};


updateArtistQuery = event => {
    this.setState({artistQuery: event.target.value});
    console.log('event.target.value',event.target.value);

}

handleKeyPress = event => {
    if (event.onKeyPress == 'Enter')
    {
        this.searchArtist();
    }
    
}

searchArtist = () => {
this.props.searchArtist(this.state.artistQuery);
}

    render(){

        return(
            <div>
                <input 
           onChange = {this.updateArtistQuery}
           onKeyPress = {this.handleKeyPress}
           placeholder = 'Search for an artist' 
           />
           <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }


}

export default Search;