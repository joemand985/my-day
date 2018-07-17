import React, { Component } from 'react'
//import "isomorphic-fetch";

class MyRequest extends Component{
	constructor(props){
		super(props);
		this.state = {
			a: 'bla',
			location: ''
		}

		 // this.bla = this.bla.bind(this)
   //   this.update = this.update.bind(this)
	}


// var update = function bla(){
// 	alert "halsdhffh"
// }


// update(){
//   //alert("bbb")
//   return 'blabla'
// }

componentDidMount(){

// Geolocation
if ("geolocation" in navigator) {
   console.log('1. we have geolocation')

  navigator.geolocation.getCurrentPosition(function(position){

  const locUrl = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=LrltGW8HIbhBXo6GZsMLJP08tUGdJ3nT&q='+ position.coords.latitude+'%2C'+ position.coords.longitude;
   console.log(locUrl) 

  fetch(locUrl)
  .then(function(response){
  	return response.json()
  })
  .then(response => response.Key)
  .then(loc => fetch('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + loc +'?apikey=LrltGW8HIbhBXo6GZsMLJP08tUGdJ3nT&details=true&metric=true'))
    .then(function(response) {
    return response.json();
  })
  .then(function(response){
    console.log(response)
  	return response;
})

})


// debug end
} else {
  alert("You must have geolocation activated!!!")
}



}

	render(){
	return  <div> {this.state.a} </div>
	}
}



export default MyRequest;