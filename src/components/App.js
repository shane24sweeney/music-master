import React, { Component } from 'react';
import '../index';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
    

state = { artistQuery: ''};


updateArtistQuery = event => {
    this.setState({artistQuery: event.target.value});
    console.log('event.target.value',event.target.value);

}

searchArtist = () => {
    console.log('this.state',this.state);

    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
    .then(response => response.json())
    .then(json => {
        console.log('json', json);
        
        if (json.artists.total > 0)
        {
            const artist = json.artists.items[0];
            this.setState({artist});
        }
    });
}

handleKeyPress = event => {
    if (event.onKeyPress == 'Enter')
    {
        this.searchArtist();
    }
    
}
   
    render(){
        return(
        <div>
            
           <h2>Music Master</h2>
           <input 
           onChange = {this.updateArtistQuery}
           onKeyPress = {this.handleKeyPress}
           placeholder = 'Search for an artist' 
           />
           <button onClick={this.searchArtist}>Search</button>
        
        </div>
        );
       
    
        }      
    
}




export default App;