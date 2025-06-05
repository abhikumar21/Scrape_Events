import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/events/").then(res => {
      setEvents(res.data);
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
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card" style={{backgroundColor:"rgb(255, 235, 216)", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}>
            <div className="" style={{width:"100%", maxHeight:"120px", overflow:"hidden"}}><img style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center"}} src={event.image} alt="" /></div>
            <h3 style={{margin:"10px 0px"}}>{event.title}</h3>
            <p style={{margin:"0px 0px", fontSize:"12px"}}>{event.date}</p>
            <p style={{margin:"6px 0px", }}>{event.venue}</p>
            <button onClick={() => handleGetTickets(event.link)}>Get Tickets</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
