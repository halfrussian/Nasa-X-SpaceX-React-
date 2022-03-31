import React, { useState} from 'react';
import styled from 'styled-components';
import '../styles/styles.scss'
import ImageGallery from 'react-image-gallery';

const MarsDayFilter = () =>  {

   const [year, setYear] = useState("");
   const [month, setMonth] = useState("");
   const [day, setDay] = useState("");
   const [images, setImages] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)
  
  const getPhotos = () => {

    setLoading(true)
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + year + "-" + month + "-" + day + "&api_key=OyQwbkyPzsHa4aisJ0rGkoMjSroGfrmcCFmI1YW5";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let x = []
        for(let i = 0; i < data.photos.length; i++){
          x.push({
            original: data.photos[i].img_src,
            thumbnail: data.photos[i].img_src
          },)
        }  
    setImages(x)
        setLoading(false)
        setError(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })

  }
    return (
    <>
      <Wrapper>
        <div className="container1">
          <div className="row1">
            <div className="col">
                <div className="main-piece">
                  <h1 className='top-title'>Choose a Day</h1>
                  <div className="row2">
                    <select id="input" onChange={(e) => {
                        const selectedYear = e.target.value;
                        setYear(selectedYear)
                      }}>
                      <option value="Year" >Year</option>
                      <option value="2021" >2021</option>
                      <option value="2020" >2020</option>
                      <option value="2019" >2019</option>
                      <option value="2018" >2018</option>
                      <option value="2017" >2017</option>
                      <option value="2016" >2016</option>
                    </select>
                    <select name="Month"  id="input"
                       onChange={(e) => {
                        const selectedMonth = e.target.value;
                        setMonth(selectedMonth)
                      }}
                       >
                      <option selected disabled>Month</option>
                      <option value="1" id='1'>January</option>
                      <option value="2" id='2'>February</option>
                      <option value="3" id='3'>March</option>
                      <option value="4" id='4'>April</option>
                      <option value="5" id='5'>May</option>
                      <option value="6" id='6'>June</option>
                      <option value="7" id='7'>July </option>
                      <option value="8" id='8'>August</option>
                      <option value="9" id='9'>September </option>
                      <option value="10" id='10'>October</option>
                      <option value="11" id='11'>November</option>
                      <option value="12" id='12'> December </option> 
                    </select>
                    <select name="Day" id="input"
                        onChange={(e) => {
                        const selectedDay = e.target.value;
                        setDay(selectedDay)
                      }}>
                      <option value="A" selected disabled>Day</option>
                      <option value="1" >1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                      <option value="6" >6</option>
                      <option value="7" >7</option>
                      <option value="8" >8</option>
                      <option value="9" >9</option>
                      <option value="10" >10</option>
                      <option value="11" >11</option>
                      <option value="12" >12</option>
                      <option value="13" >13</option>
                      <option value="14" >14</option>
                      <option value="15" >15</option>
                      <option value="16" >16</option>
                      <option value="17" >17</option>
                      <option value="18" >18</option>
                      <option value="19" >19</option>
                      <option value="20" >20</option>
                      <option value="21" >21</option>
                      <option value="22" >22</option>
                      <option value="23" >23</option>
                      <option value="24" >24</option>
                      <option value="25" >25</option>
                      <option value="26" >26</option>
                      <option value="27" >27</option>
                      <option value="28" >28</option>
                      <option value="29" id='day29' style={{display: month === '2' && year === '2020' || year ==='2016' ? 'block' : 'none'}}>29</option>
                      <option value="30" style={{display: month === '2' ? 'none' : 'block'}}>30</option>
                      {/* 🎶 thirty days has september, april, june and november 🎶 */}
                      <option value="31" style={{display: month === '2' || '9' || '4' || '6' || '11' ? 'none' : 'block'}}>31</option>
                    </select>
                    <button className='button' onClick={getPhotos}>Explore</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="container3">
            <div className="row3">
              <div className="col3">
              <div className="loader"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
          <ImageGallery items={images}>
          </ImageGallery>
          <div className='empty-space'></div>
          </>
        )}
        {error ? (
          <div className="container3">
            <div className="row3">
              <div className="col3">
              <div className="error">Error, try again...</div>
              </div>
            </div>
          </div>
        ) : (
        <div className='empty-space'></div>
        )}
      </Wrapper>
    </>
    );
}

const Wrapper = styled.div`

.error {
  color:white;
  font-size: 50px;
  font-family: "Courier New";
}

.empty-space {
  margin-top: 10% !important;
  margin-bottom: 10% !important;
}

.row3 {
  display:flex;
  align-items: canter;
  justify-content: center;
  margin-top: 18% !important;
  margin-bottom: 18% !important;
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

.button:hover {
  transition: all 1s;
  background-color: white;
  cursor: pointer;
  color: black;
  border: 2px solid black;
}

.button {
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

.row2 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom:3% !important;
}

#input {
  font-size: 20px ;
  font-family: "Courier New";
  color:white;
  background-color: black;
  
}

.top-title {
  font-family: "Courier New";
  display:flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top:3% !important;
  padding-bottom:3% !important;
}

@media (max-width: 740px) {
  .main-piece {
    width: 500px !important;
  }
  .row2 {
    flex-wrap:wrap !important;

  }
  #input {
    
  }
}

.main-piece {
  border-radius: 30px;
  background-color: black;
  width:700px;
  margin-bottom: 5% !important ;
  border: 2px solid white;
}

.container1{
  display: flex;
  align-items: center;
  justify-content: center; 
}
`
export default MarsDayFilter;
