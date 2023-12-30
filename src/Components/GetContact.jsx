import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useNavigate} from "react-router-dom";

export const GetContact = ({id,setId}) => {
  const navigate=useNavigate();
  const [data1, setData1] = useState([]);
  const [isLoader,setIsloader]=useState(false);
 

  const deleteContact=(id)=>{
    const fetchData = async () => {
      const apiData = await axios.delete(
        `https://to-do-list-ry7u.onrender.com/api/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(apiData);
    };
    fetchData();
  }
  useEffect(() => {
    const fetchData = async () => {
      setIsloader(true);
      const apiData = await axios.get(
        "https://to-do-list-ry7u.onrender.com/api/getcontacts",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(apiData);
      setData1(apiData.data.contact);
      setIsloader(false)
      console.log(data1);
    };
    fetchData();
  }, []);
  const EditContact=(id)=>{
    setId(id);
    navigate('/'); 
  };

  return( 
    <div>
    {isLoader ? (
      <Spinner/>
    ) : (<div className="container">
      {data1.map((value) => {
        return (
          <>
            <div className='border p-5 m-5 text-center' key={value._id} style={{ background: 'blue' }}>
              <h1>{value.name}</h1>
              <h2>{value.gmail}</h2>
              <h3>{value.phone}</h3>
              {(value.ctype)?(<button className="btn btn-warning mx-3">Perosnal</button>):(<button className="btn btn-danger">Proffesional</button>)}
              <button onClick={()=>EditContact(value._id)} className="btn btn-primary mx-3">Edit</button>
              <button onClick={()=>deleteContact(value._id)} className="btn btn-secondary mx-3">Delete</button>
            </div>
          </>
        );
      })}
      </div>
    )}
  </div>
  
  );
};

export default GetContact;