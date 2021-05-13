import { render } from '@testing-library/react';
import React from 'react';
import Component1 from "../Component1.js";

class Movies extends React.Component{
    getMovie = (title,path,date) =>{
        return <Component1 title={title} path={path} date={date}/>
    }

    render(){
        return(
            
            <div className="container">
                {this.getMovie("Title1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUO8raQ-gwy_HzYkvkCl4TqxtkTS1-4RUjg&usqp=CAU","20-05-2021")}
                {this.getMovie("Title2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUO8raQ-gwy_HzYkvkCl4TqxtkTS1-4RUjg&usqp=CAU","22-05-2021")}
            
                {this.getMovie("Title3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUO8raQ-gwy_HzYkvkCl4TqxtkTS1-4RUjg&usqp=CAU","25-05-2021")}
                {this.getMovie("Title4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUO8raQ-gwy_HzYkvkCl4TqxtkTS1-4RUjg&usqp=CAU","28-05-2021")}
                {this.getMovie("Title5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUO8raQ-gwy_HzYkvkCl4TqxtkTS1-4RUjg&usqp=CAU","31-05-2021")}
            

        </div>
        );
        
    }

}

export default Movies;