import React,{ useEffect, useState} from "react";
import { useRef } from "react";
import styled from 'styled-components';
import Navigation from "../components/navigation";



//maybe solve this with redux

const WhosUp = () => {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()  
    
    const [astroData, setAstroData] = useState([])
    const [sure, setSure] = useState(false)
    const [nah, setNah] = useState(false)
    const [okay, setOkay] = useState(false)
    const [sorry, setSorry] = useState(false)

    useEffect(()=> {
        console.log(astroData)
       
    }, [astroData])

    const sureFunction = () => {
        
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
           
            setAstroData(data.people)
            console.log(astroData)
            setSure(true)
        })

    }


    const okayFunction = () =>  {
      setOkay(true)
    }
    const sorryFunction = () => {
      fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
          console.log(data)
         setSorry(true)
          setAstroData(data.people)
          console.log(astroData)
      })
    }
  

    return (
      <>
      <Navigation />
       <Wrapper>
       
        <img src="https://i.ibb.co/m9WPNCC/Pik-Png-com-space-helmet-png-965691.png" alt=""
         className="astro" id="astro"/>
        <>
            <section className='space-bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className='top-tit'>Wanna know who's in space right now?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="row1">
                            { nah ? (
                              null
                            ) : (
                              <button className='who-button top-btn' onClick={sureFunction}>sure</button>
                            )
                            }
                            

                            { sure? (
                              null ) : (
                                <button className='who-button top-btn' onClick={() => setNah(true)}>nah</button>
                              )
                             }


                             {sure ? (
                              <button className="who-button scroll-btn" onClick={executeScroll}>scroll</button>
                             ) : (
                                  null
                             )}
                             {nah  ? (
                              <button className="who-button scroll-btn" onClick={executeScroll}>scroll</button>
                             ) : (
                                  null
                             )}
                        </div>
                        <div ref={myRef} ></div>
                    </div>  
            </section>
                    { sure ? (
                       astroData.map((astronaut) => {
                           const {craft, name} = astronaut
                           return (
                               <>
                               <div className="who-container" >
                                  <div className="row5"  >
                                    <ul className="list">
                                        <li className='list-item'>Spacecraft: {craft} | Astronaut: {name}</li>
                                    </ul>
                                </div>
                               </div>
                               </>
                           )
                        })

                    ) : (
                        null
                    )}

                        { nah ? (
                          <div className="who-container">
                            <div className="row5">
                            <h4>Fine be that way...</h4>
                            <button className="who-button okay-sure" onClick={okayFunction}> ok sure </button>
                            </div>
                          </div>
                        ) : (
                            null
                        )}

                         {
                          okay ? (
                            <div className="who-container">
                            <div className="row5">
                                <h4>Nah you made your choice...</h4>
                                <button className="who-button okay-sure" onClick={sorryFunction}> ok I'm sorry.</button>
                            </div>
                          </div>
                          ) : (
                            null
                          )
                        } 

                        {
                          sorry ? (
                            
                            astroData.map((astronaut) => {
                           const {craft, name} = astronaut
                           return (
                               <>
                               <div className="who-container" >
                                  <div className="row5"  >
                                  
                                    <ul className="list">
                                        <li className='list-item'>Spacecraft: {craft} | Astronaut: {name}</li>
                                    </ul>
                                </div>
                               </div>
                               </>
                             )
                            }) 
                        ) : (
                      null
                    )
                }
            </>
        </Wrapper>
   </>
    )
}

const Wrapper = styled.div`

.okay-sure {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
}
h4 {
    color:white;
    font-size: 30px;
}

*{
 font-family: "Courier New" !important;
}

.container {
    margin-left: 10%  ;
    margin-right: 10% !important;
}
.row {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

.space-bg {
    background-image: url('https://i.redd.it/1cvcks6gpka81.jpg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.top-tit {
  margin-left: 10% !important;
    margin-top: 10% !important;
    color: white;
    font-size: 50px;
}

.row1 {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-top: 1% !important;
}

.who-button {
    margin-left: 10px !important;
    margin-right: 10px !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
    font-size: 25px !important;
    font-family: "Courier New" !important;
    font-weight: bold;
    border-radius: 16px;
    border: 2px solid white;
    background-color: black;
    color:white;
    
  }

  .who-button:hover {
    transition: all 1s;
    background-color: white;
    cursor: pointer;
    color: black;
    border: 2px solid black;
  }

  .top-btn  {
    margin-bottom: 500px !important;
  }

  .scroll-btn {
    margin-bottom: 500px !important;
  }

.astro {
    width : 50px !important;
    position: absolute !important;
    animation:float !important;
    animation-duration: 175s !important;
    animation-iteration-count: infinite !important;
   
}

@keyframes float {

    0% {
        transform: translate(0%, 0%) rotate(0deg);
    }

    50% {
        transform:translate(1500px, 200px) rotate(360deg);
    }
    100% {
        transform:translate(0%, 0%) rotate(0deg);
    }
    
}


.space {
  padding-bottom: 50% !important;
}

ul {
    list-style: none;

}

.who-container {
    margin-top: 3% !important;
    margin-left: 10% !important;
    margin-right: 10% !important;
}

.row5 {
    display: flex !important; 
    flex-direction: column !important;
    flex-wrap: wrap;
    align-items: center;
   
}

li {
    font-size: 25px;
    color: white;
}

`
export default WhosUp