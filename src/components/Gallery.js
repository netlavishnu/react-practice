import React, { Component } from 'react'

export default class Gallery extends Component {
    state = {
        image: ["https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg",
   "https://thumbs-prod.si-cdn.com/mdXiXm_dBpgS0hZM_0389zm4bn4=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/46/c7/46c7da28-e266-497b-9bc3-d25e291ee962/istock-1144653112.jpg","https://www.allaboutbirds.org/news/wp-content/uploads/2020/03/THeron-Anderson-124505431.jpg","https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg?itok=5o35rflV","https://tse4.mm.bing.net/th?id=OIP.TP-0bUCVkZY02E4W52bUvwHaEK&pid=Api&P=0&w=280&h=158"],
   i:0

    }
    Previous =() => {
        if(this.state.i>0){
        this.setState({i:this.state.i-1})
    }else {
        this.setState({i:this.state.image.length-1})
    }
    }
    Next = () => {
        if(this.state.i<this.state.image.length-1){
        this.setState({i:this.state.i+1})
    }else {
        this.setState({i:0})
    }
}
onClick = (e) => {
    console.log(e.target.id);
    this.setState({i:e.target.id})
}
    render() {
        // console.log(e.target);
        return (
            <div>
            <div>
                <button onClick= {this.Previous}>Previous</button>
                <img src={this.state.image[this.state.i]} width="200px" height="200px" alt="images"></img>
                <button onClick= {this.Next}>Next</button>
            </div>
            <div>
                {this.state.image.map((url,k)=><button onClick={this.onClick}id={k} className={this.state.i==k?"active":""}>{k+1}</ button>)}
            </div>
            </div>
        )
    }
}






