import React, {Component} from 'react'
import Car from './Car/Car'

export default class Cars extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2017},
      {name: 'Mazda', year: 2019}
    ]
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px'
      }}>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}