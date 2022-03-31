import React,{useEffect, useState} from "react";
import Navigation from "../components/navigation";
import styled from "styled-components";
import marsClip from '../media/marsClip.mp4';
import "../styles/styles.scss"
import MarsDayFilter from '../components/mars.day.filter.js'


const Mars = () => {
  const [marsTemp, setMarsTemp] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [atmosphericPressure, setAtmosphericPressure] = useState(null)
  const [windDirection, setWindDirection] = useState('')
  const [signal, setSignal] = useState('')
  const [thisDate, setThisDate] = useState('')

  useEffect(()=> {
    let marsWeatherUrl = 'https://api.nasa.gov/insight_weather/?api_key=OyQwbkyPzsHa4aisJ0rGkoMjSroGfrmcCFmI1YW5&feedtype=json&ver=1.0'
    
    fetch(marsWeatherUrl)
      .then(res => res.json())
      .then(data => {
          setMarsTemp(Math.floor(data["1098"].AT.av))
          //console.log(Math.floor(data["1098"].HWS.av))
          setWindSpeed(Math.floor(data["1098"].HWS.av))
          setAtmosphericPressure(Math.floor(data["1098"].PRE.av))
          setWindDirection(data["1098"].WD['0'].compass_point)
          setSignal(data["1098"].Last_UTC)
      })
      .catch((error) => {
        console.log(error)
      })

     setThisDate(new Date().toLocaleString())

   }, [])


  return (
    <>
     <Navigation />
      <Wrapper>
        <div className="container">
          <div className="row1 typewriter">
            <h1 className="head">Mars's Temprature:{`63`}°F</h1>
          </div>
          <div className="row2">
            <ul>
              <li>Last Signal:{thisDate}</li>
              <li>Average Horz. Wind Speed: {`35`}mph</li>
              <li>Average Atmos. Pressure: {321.2}</li>
              <li class='last-list'>Wind Direction: {`NW`}</li>
             
            </ul>
            
          </div>
          
          <video className='videoTag' autoPlay loop muted>
            <source src={marsClip} type='video/mp4' />
          </video>
        </div>
        <div className="row2">
          </div>
        <div className="container3">
          <div className="row4">
            <div className="col">
              <h2 className="rover-title">The Mars Rover Gallery
              <br />
              Choose a day
              
              </h2>
              
            </div>
          </div>
        </div>
        </Wrapper>
      <MarsDayFilter />
    </>
  )

}

const Wrapper = styled.div`
.butt:hover {
  transition: all 1s;
  background-color: white;
  cursor: pointer;
  color: black;
  border: 2px solid black;
}

.butt {
  padding-left: 30px !important;
  padding-right: 30px !important;
  font-size: 25px;
  font-family: "Courier New";
  font-weight: bold;
  border-radius: 16px;
  border: 2px solid white;
  background-color: black;
  color:white;
}


.last-list {
  margin-bottom: 20px !important;
}

.container3 {
  padding-left: 25% !important;
  padding-right: 25% !important;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.col {
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.rover-title {
  margin-bottom: 4% !important;
  margin-top: 3% !important;
  font-size: 45px;
  color: white;

}
*{
  font-family: "Courier New";
}

@media( max-width:1100px) {
  ul li {
  color: white;
  font-size: 16px !important;
 
}
  
}

.row2 {
  position: absolute;
  margin-top: 15% !important;
  left: 58%;
}
ul li {
  font-size: 28px;
  color: white;
  margin-bottom:8px !important;
}

.typewriter h1 {
  flex-wrap:wrap;
  overflow: hidden;
  border-right: .15em solid white;
  white-space: pre !important;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
  typing 3.5s steps(40, end),
  blink-caret .75s step-end infinite !important;
  animation-iteration-count: 1;
}


@keyframes typing {
  0% { width: 0% }
  100% { width: 85% }
}


@keyframes blink-caret {
  from, to { border-color:white }
  50% { border-color: transparent ; }
}

@media (max-width: 1100px) {
  .row1 {
${'' /* trying to center the row in media query  */}

  }
   .head {
    font-size: 16px;
  }

}

.row1 {
 position: absolute;
margin-top: 10% !important;
left: 48%;
font-size: 18px;
}
.videoTag {
  width: 100%;
 
}
.head {
  color: white;

}
.test {
  color:white;
}

`

export default Mars