import React, { Component } from 'react'


 const vacationList =  ["Korea","Swizerland","Canada","USA"]

    export default class Myinfo extends Component {
        render() {
        return (
            <div className="myinfo">
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
               <label>                The countries i want to visit are:
</label> <ol>
                {vacationList.map(vacation =>
                <li key={vacation}>{vacation}</li>
                )}
            </ol>
            </div>
            
        )
    }
}
