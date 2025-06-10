import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = async(e) => {
    setSearchQuery(e.target.value);
    if(events.length > 0)  {  
      const filtered = events.filter(event => event.title.toLowerCase().includes(e.target.value.toLowerCase()));
      // console.log(filtered);
      setFilteredEvents(filtered);
    }
  }

  useEffect(() => {
    setLoading(true);
    // Fetch events from the backend API
    axios.get(process.env.REACT_APP_BACKEND_API_URL).then(res => {
      setEvents(res.data);
      setFilteredEvents(res.data);
      setLoading(false);
      // console.log(res.data);
    });
  }, []);

  const handleGetTickets = (link) => {
    const userEmail = prompt("Enter your email to proceed:");
    if (userEmail) {
      setEmail(userEmail);
      window.location.href = link;
    }
  };


  return (

    <div className="App">
      <h1>Sydney Events</h1>
      <div style={{display:"flex"}}>
        <input value={searchQuery} placeholder='Search Events' name="search" onChange={handleChange} type="text" style={{width:"400px", padding:"6px 8px", marginRight:"20px"}} />
        {/* <button>Search Events</button> */}
      </div>

      {loading ? (
      <div style={{display:"flex", height:"60vh", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div id="wrapper" style={{display:"flex"}}>		
          <div id="corpus"></div>
          <div id="spinner"></div>
        </div>
        <p style={{font:"bold", fontSize:"30px", display:"flex", marginTop:"40px" }}>Loading events</p>
      </div>) : 

      (<div className="event-grid" style={{marginTop:"20px"}}>
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card" style={{backgroundColor:"rgb(255, 235, 216)", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", maxWidth:"300px"}}>
            <div className="" style={{width:"100%", maxHeight:"120px", overflow:"hidden"}}><img style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center"}} src={event.image} alt="" /></div>
            <h3 style={{margin:"10px 0px"}}>{event.title}</h3>
            <p style={{margin:"0px 0px", fontSize:"12px"}}>{event.date}</p>
            <p style={{margin:"6px 0px", }}>{event.venue}</p>
            <button onClick={() => handleGetTickets(event.link)}>Get Tickets</button>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default App;
