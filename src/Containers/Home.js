import React, { Component } from 'react'
import {Button} from 'antd'
import '../css/Home.css'

export default class Home extends Component {
   constructor (props) {
      super(props);
      this.state = {
              lon: '',
              lat: '',
              error : null,
      }
    }
     componentDidMount() {
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(
             (position) => {
               this.setState({
                 lat: position.coords.latitude,
                 lon: position.coords.longitude,
                 error: null,
               });
               console.log(this.state.lat, this.state.lon)
             },
             (error) => this.setState(
               {error: error.message}
             )
           );
         }
     }

    onClickFind = () => {
      const {history}= this.props;
      const {lat,lon}= this.state;
      history.push(`/order/${lat}/${lon}`);
    }
 
   render() {
       return (
           <>
               <div className = "container">    
                   <div className = "subcontainer">
                    <span className = "text"> HEY MUNCHIES, PLEASE PICK MY RESTRAUNT FOR ME </span>
                    <Button type = "primary" style = {{size: 'small', backgroundColor:'black', paddingLeft: '50px', paddingRight: '50px', marginTop: '10px'}} onClick={this.onClickFind}>
                          I'm on it!!!
                    </Button> 
                   </div>
               </div>
           </>
       )
   }
}