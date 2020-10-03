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
        var request = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${value}`;
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

        return <div id="sideBarSearchForm">
        <form autoComplete="off">
          
            <input style={{
                
                width: "268px",
                height: "48px",
                left: "47px",
                top: "82px"
            }} type="text" name="search" value={this.state.search} onChange={this.handleInputChange}/>
           
            
            <button 
            name="search"
            style={{
                
                width: "86px",
                height: "48px",
                left: "327px",
                top: "82px",
                backgroundColor: "#3C47E9",
                fontFamily : "Raleway",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#E7E7EB",
                border:"none"
                }} 
                onClick={e => this.handleSearch(e) }>Search</button>
        </form>
        <div>
        {this.state.citys.map( (city, index)  =>(
               <div> 
                   <button style={{
                width:"367px",
                height:"64px",
                border:"1px solid #616475",
                backgroundColor:"#1E213A",
                fontFamily :"Raleway",
                fontSize:"16px",
                textAlign:"left",
                color:"#E7E7EB",
                borderRadius: "2px"
               }} key={index} name={city.title} id={city.woeid} onClick={this.handleClickCity}>{city.title}</button> </div>
            ))}
        </div>
        </div>
    }
}

export default SideBarSearchForm