import './App.css';
import axios from 'axios';
import Product from './product'
import {useState , useEffect} from 'react'


function App() {
  let [data , setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/fetchData').then(res=>{
      console.log(res.data);
      setData(res.data);
    })  
  }, []);
  
  return (
    <div>
        <div>
            <div className="container">
            <div className="row my-4">
            {data.map((element)=>{
            return <div className='col-sm' key={element.id}>
                <Product name={element.product_type} imageurl={element.src}/>
                </div>
            })}
        </div>
            </div>
            </div> 
    </div>
  );
}

export default App;
