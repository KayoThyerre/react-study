import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <h3>{props.title}</h3>
            <p>esse é um texto do card</p>
        </div>
    )
}

// class Card extends React.Component {
//     render(){
//         return (
//             <div className='card'>
//                 <h3>{this.props.title}</h3>
//                 <p>esse é um texto do card</p>
//             </div>
//         )
//     }
// }

export default Card;