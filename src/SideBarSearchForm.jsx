import React from 'react';

class SideBarSearchForm extends React.Component {

    state = {
        search :"",
        citys: [],
        city:"",
        woeid:""
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        console.log(value);
        this.setState({
          [name]: value
        }); 
        var request = `https://www.metaweather.com/api/location/search/?query=${value}`;
        console.log(request);
        if (value) { 
            fetch(request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({citys:data});
            }).catch(function (err) {
            console.warn('Something went wrong.', err);
            });
        }
      }
    
      handleClickCity = (event) => {
        const city = event.target.name;
        const woeid = event.target.id;
        this.setState({
            search:city,
            woeid: woeid,
            city:city,
            citys: []
        });
        
      }

      handleSearch(e){
        e.preventDefault();
        this.props.onSearch(this.state.city, this.state.woeid);
        this.setState({search:""});
      }
  
    render(){

        return <div className="sidebarSearchForm" id="sidebarSearchForm">
        <div className="quitButtonContainer"><button className="quitButton"onClick={() => document.getElementById("sidebarSearchForm").style.zIndex ="0"}><p>X</p></button></div>
        <form autoComplete="off" className="searchForm">
            <input className="searchInput" type="text" name="search" value={this.state.search} onChange={this.handleInputChange}/>
            <button  className="searchButton"name="search" onClick={e => this.handleSearch(e) }><p>Search</p></button>
        </form>
        <div className="searchResults">
            {this.state.citys.map( (city, index)  =>(
               <div className="searchResult"> 
                   <button className="searchResultButton" key={index} name={city.title} id={city.woeid} onClick={this.handleClickCity}><p>{city.title}</p><p>{">"}</p></button>
                </div>
            ))}
        </div>
        </div>
    }
}

export default SideBarSearchForm