import React,{useState} from 'react';
import styled from 'styled-components';
import Navigation from '../components/navigation';

const Crew = () => {

    const [loading, setLoading] = useState(false)
    const [astronautData, setAustronautData] = useState([])


    const testFunction = () => {
      setLoading(true)
  
      let url = 'https://api.spacexdata.com/v4/crew'
      fetch(url)
      .then(res=> res.json())
      .then(data => {
        setAustronautData(data)
        console.log(data[0].name)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
      
    }


    return (
        <Wrapper>
         <Navigation />
         <div className="container1 ">
              <div className="row1 typewriter">
                <h1 className='top-title'>Await Crew Access</h1>
                </div>
                <div className="row2 typewriter">
                    {/* <h4 className='one-para'>Lorem ipsum dolor sit amet consectetur adipisicing itatim recusandae, iure eaque a accusantium odio!</h4> */}
                    <button class='button' onClick={testFunction}>Access Crew</button>
                </div>
            </div>
            <div className="container10">
              <div className="row">
                      { loading ? (
                      <div className="conatiner">
                        <div className="row">
                          <div className="loader"></div>
                        </div>
                      </div>
                      ) : (
                        astronautData.map((astronaut) => {
                          const {name, agency, image, wikipedia} = astronaut
                          return (
                            <>
                              <div className="crew-card">
                                <img src={image} alt="" className='crew-img' />
                                <img className='crew-wiki-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2244px-Wikipedia-logo-v2.svg.png' alt=""
                                onClick={() => window.open(wikipedia)} />
                                <div className="content">
                                <h3 className='name'>Name: {name}</h3>
                                <h3 className='agency'>Crew: {agency}</h3>
                                </div>
                            </div>
                            </>
                          )
                        })
                      
                      )}
                </div>
            </div>

           
        </Wrapper>
    )

}

const Wrapper = styled.div`

.container10 {
  margin-left: 14% !important;
  margin-right: 14% !important;
}

.content{
  font-family: "Courier New";
  font-size: 15px;
  inline-size: 200px;
}

.agency {
  margin-bottom: 2% !important;
}

.row {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-evenly !important;
  flex-wrap: wrap;
}

.crew-card {
  background: linear-gradient(0deg, rgba(202,255,254,1) 10%, rgba(45,150,253,1) 95%);
  margin: 20px !important;
  display: flex;
  flex-direction: column;
  width: auto !important;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  max-height: 550px !important;
  overflow: hidden !important;
}

.crew-img {
  max-height: 300px !important;
  width: auto !important;
  border-radius: 18px 18px 0px 0px;
}

.crew-wiki-logo:hover {
  transform: scale(1.10) !important;
  border: 3px solid black;
  border-radius: 50%;
  cursor:pointer
  
}
.crew-wiki-logo {
  margin-top: 2% !important;
  width: 40px ;
  transition: all 1s;
  border-radius: 50%;
}

.loader {
  border: 16px solid dark-gray; 
  border-top: 16px solid white; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
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
  100% { width: 70% }
}

@keyframes blink-caret {
  from, to { border-color:white }
  50% { border-color: transparent ; }
}

@keyframes slidein {
 0% {
   opacity: 0;
    transform: translateX(-100%);
  }
  
  25% {
    opacity: 0;
    
   }

   50% {
    opacity: 0;
    
   }
   75% {
    opacity: 0;
    
   }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@media (max-width: 800px) {
  .button {
    font-size: 20px !important;
  }
}

.button{
animation: slidein !important;
animation-duration: 6s !important;
  margin-top: 6% !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  font-size: 30px;
  font-family: "Courier New";
  font-weight: bold;
  border-radius: 16px;
  border: 2px solid white;
  background-color: black;
  color:white;
  transition: all 1s;
}

.button: hover {
  background-color: white;
  cursor: pointer;
  color: black;
  border: 2px solid black;
}

.card-img {
    max-width: 300px !important;
    border-radius: 40px;
}

.row1 {
  padding-top: 7% !important;
  padding-left: 10% !important;
  display: flex;
  flex-wrap: wrap;
}

.row2 {
  padding-bottom: 9% !important;
  padding-left: 10% !important;
  padding-right: 40% !important;
  flex-wrap: wrap;
}

@media (max-width: 800px) {
  .top-title {
    font-size: 30px !important;

  }

  @keyframes typing {
    0% { width: 0% }
    100% { width: 100% }
  }
}

.top-title {
  color:white;
  font-size: 58px;
  font-weight: normal !important;
}

.container1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 10)), 
  url("https://www.popsci.com/uploads/2019/12/20/VC6OKOFVRZAN7GUN4KUEHAAOMU.jpg") !important;
  background-size: cover;
  font-family: "Courier New";
  animation: heartbeat 8s infinite !important;
}


@keyframes heartbeat {
  0% {
    transform: scale(1.0015)
  }
  10% { 
    transform: scale(1)
  }
  20% {
    transform: scale(1.0015);
  }
  30% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.0015);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.0015);
  }
  70% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.0015);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.0015);
  }
}
`

export default Crew