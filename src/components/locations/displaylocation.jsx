import React from 'react';
import {LOCATION_DATA} from './locationdata';
import ShowFood from './showfood';

 
class DisplayLocation extends React.Component{

constructor(props){
    super(props);

   this.state = {
   collections: LOCATION_DATA
       
   };


}

render (){
     const value = this.props.locationName;
    console.log(value);
    const {collections} = this.state;
    console.log(collections);
    return (

        <div>
            
          { collections.filter(loc =>loc.location===value ).map(({id,...otherCollection}) => (
             <ShowFood key={id} {...otherCollection}/>
              ) )
          }
        </div>
    );
}

}

export default DisplayLocation;