import React, { Component } from 'react';
import {Button} from 'antd'
import axios from 'axios';
import '../css/Order.css'

const generateRandomNumber = (min, max) => {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

export default class Order extends Component {
    state = {}

    componentDidMount() {
        this.getRandomRestaurant();
    }
    
    getRandomRestaurant = async () => {
        const {match} = this.props;
        const {params} = match;
        const {lat, lon} = params;
        const res = await axios.get('https://developers.zomato.com/api/v2.1/geocode',{ 
            params: { lat, lon }, 
            headers:{ 'user-key': '9ac3b629ab877765bf745bf34c374355' }
        });
        const restaurants = res.data.nearby_restaurants;
        console.log(restaurants);
        
        const randomIndex = generateRandomNumber(0, restaurants.length-1);
        console.log(randomIndex);
    
        this.setState({selectedRestaurant: restaurants[randomIndex].restaurant});
        this.setState({thumb: restaurants[randomIndex].restaurant.thumb});
        this.setState({ourl: restaurants[randomIndex].restaurant.order_url});
        console.log(this.state.ourl);
    }
    refreshBody = () => {
        console.log('button clicked');
        window.location.reload();
    }
    

    render() {
        const {selectedRestaurant}= this.state;
        return (
            <div className = "orderpage1">
                <div className = "container1">
                <h1>  Why don't you eat from </h1>
                <h2>{selectedRestaurant ? selectedRestaurant.name : null} </h2>
                <br/> <br/>
                <img className = "image" alt = {this.state.thumb} src = {this.state.thumb} />   <br/>  <br />
                 
                 <Button type = "primary" onClick = {this.refreshBody}> No that place looks like shit</Button>
                 <br/> <br/>
                 <Button type = "primary" 
                         href = {this.state.ourl}
                         target = "external">That looks Good! order now </Button>
                </div>
            </div>
        )
    } 
}
