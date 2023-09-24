import React from 'react'
import ReactDOM from 'react-dom'


// importing data

import { countriesData } from './data/countries'
import { tenMostHighestPopulations } from './data/ten_most_highest_populations'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

const box = {
  border: "1px solid #000",
  padding: "10px",
  margin: "5px",
  width: "80px",
  height: "80px",
  textAlign: "center",
}

const divBox = {
  width: "70%",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  color: "#2c2c2c"
}

const divBox1 = {
  width: "90%",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  color: "#2c2c2c",
  backgroundColor: "#D3D3D3",
  textAlign: "center",
  padding: "20px"
}

const numbers = [];
for (let i = 0; i < 33; i++) {
  numbers.push(i)
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const getColor = (number) => {
  if (isPrime(number)) return 'red';
  if (number % 2 === 0) return 'green';
  return 'yellow';
};

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index]
  }
  return '#' + color
}

const colorBox = [];
for (let i = 0; i < 33; i++) {
  colorBox.push(
    <div key={i} style={{
      backgroundColor: hexaColor(),
      border: "1px solid #000",
      padding: "10px",
      margin: "5px",
      width: "80px",
      height: "80px",
      textAlign: "center",
      color: "#ccc"
    }}>
      {hexaColor()}
    </div>
  )
}

const populationData = countriesData.map((el) => ({
  name: el.name,
  population: el.population
}))
populationData.sort((a, b) => b.population - a.population);
const topTenCoun = populationData.splice(0, 10);

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
        <br />
        <div style={divBox}>
          {numbers.map((number) => (
            <span
              key={number}
              style={{
                ...box,
                backgroundColor: getColor(number),
              }}
            >{number}</span>
          ))}
        </div>
        <br />
        <div style={divBox}>
          {colorBox}
        </div>
        <br />
        <div style={divBox1}>
          <div style={{ display: "flex", flexDirection: "column", width: "30%", float: "left" }}>
            {topTenCoun.map((coun, index) => (
              <div key={index}>{coun.name}</div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "30%" }}></div>
          <div style={{ display: "flex", flexDirection: "column", width: "30%", float: "right" }}>
            {topTenCoun.map((coun, index) => (
              <div key={index}>{coun.population}</div>
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
