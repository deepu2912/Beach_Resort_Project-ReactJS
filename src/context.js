import React, { Component } from 'react'
import items from './data';
// import Client from './contentful'

// Client.getEntries({
//     content_type:"beachResortRoom"
// })
// .then((response) => console.log(response.items))
// .catch(console.error)

const RoomContext = React.createContext();
//<RoomContext.Provider value={'hello'}/>
export default class RoomProvider extends Component {
    state={
       rooms:[],
        sortedrooms:[],
        featuredrooms:[],
        loading:true,
        //
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    // getdata = async () =>{
    //     try{
    //         let response = await Client.getEntries({
    //             content_type:"beachResortRoom"
    //         })
    //         let rooms = this.formatData(response.items)
    //         let featuredrooms = rooms.filter(room => room.featured === true)
    
    //         let maxPrice = Math.max(...rooms.map(item => item.price));
    //         let maxSize = Math.max(...rooms.map(item => item.size))
         
    //          this.setState({
    //             rooms:rooms,
    //             featuredrooms:featuredrooms,
    //             sortedrooms:rooms,
    //             loading:false,
    //             price:maxPrice,
    //             maxPrice:maxPrice,
    //             maxSize:maxSize 
    //         })
    //         console.log(response);
            
    //     }catch(error){
    //         console.log(error);
            
    //     }
    //     finally{
    //         let rooms = this.formatData(items)
    //         let featuredrooms = rooms.filter(room => room.featured === true)
    
    //         let maxPrice = Math.max(...rooms.map(item => item.price));
    //         let maxSize = Math.max(...rooms.map(item => item.size))
         
    //          this.setState({
    //             rooms:rooms,
    //             featuredrooms:featuredrooms,
    //             sortedrooms:rooms,
    //             loading:false,
    //             price:maxPrice,
    //             maxPrice:maxPrice,
    //             maxSize:maxSize 
    //         })
    //     }
    // }

    componentDidMount(){
        // this.getdata()
        let rooms = this.formatData(items)
            let featuredrooms = rooms.filter(room => room.featured === true)
    
            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size))
         
             this.setState({
                rooms:rooms,
                featuredrooms:featuredrooms,
                sortedrooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice:maxPrice,
                maxSize:maxSize 
            })
      
    }

    formatData(items){
        let tempitems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>  
                image.fields.file.url);
            let room = {...item.fields,images,id};
            return room;
        })
        return tempitems;
    }


    getRoom=(slug)=>{
        let tempRooms = [...this.state.rooms] ;
        const room = tempRooms.find(room=>
            room.slug === slug
        )
        return room;
    }

    handleChange = event => {
        debugger;
        // const type = e.target.type;
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log(type + '' + name + '' + value); 
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        
        this.setState(
          {
            [name]: value
          },
          this.filterRooms
        );
    }

    filterRooms=()=>{
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
          } = this.state;

        let tempRooms = [...rooms];    

        capacity = parseInt(capacity);

        price = parseInt(price);
debugger;
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type);
        }  

        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        tempRooms = tempRooms.filter(room => room.price <= price);

        ///Filter by Room Size
        tempRooms = tempRooms.filter(room=>room.size >= minSize && room.size <= maxSize)

         ///Filter by breakfast
         if(breakfast)
         {
         tempRooms = tempRooms.filter(room=>room.breakfast === true)
        }
           ///Filter by pets
           if(pets)
           {
           tempRooms = tempRooms.filter(room=>room.pets === true)
        }
        this.setState(
            {
              sortedrooms: tempRooms
            })
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,
                                            getRoom:this.getRoom,
                                            handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=> <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}


export {RoomProvider,RoomConsumer,RoomContext};