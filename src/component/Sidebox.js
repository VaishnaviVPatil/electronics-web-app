import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import './comp.css'

function Sidebox() {
  return (
    <div>
      <Card size="small" title="Speakers" style={{ width: 350 }}  className="card">
        <p><Link to="/Speaker/iHome" className="card-link">iHome</Link></p>
        <p><Link to="/Speaker/Echo" className="card-link">Echo</Link></p>
        <p><Link to="/Speaker/Bose" className="card-link">Bose</Link></p>
      </Card> 
      <Card size="small" title="Lights" style={{ width: 350 }} className="card">
        <p><Link to="/Light/Govee" className="card-link">Govee</Link></p>
        <p><Link to="/Light/Philips" className="card-link">Philips</Link></p>
        <p><Link to="/Light/Kasa" className="card-link">Kasa</Link></p>
      </Card>
      <Card size="small" title="Locks"style={{ width: 350 }}  className="card">
        <p><Link to="/Lock/Veise" className="card-link">Veise</Link></p>
        <p><Link to="/Lock/Philips" className="card-link">Philips</Link></p>
        <p><Link to="/Lock/Wyze" className="card-link">Wyze</Link></p>
      </Card>
      <Card size="small" title="DoorBell" style={{ width: 350 }}  className="card">
        <p><Link to="/DoorBell/Reolink" className="card-link">Reolink</Link></p>
        <p><Link to="/DoorBell/Google" className="card-link">Google</Link></p>
        <p><Link to="/DoorBell/Eken" className="card-link">Eken</Link></p>
      </Card>
      <Card size="small" title="Thermostats" style={{ width: 350 }}  className="card">
        <p><Link to="/Thermostat/Honeywell" className="card-link">Honeywell</Link></p>
        <p><Link to="/Thermostat/Google" className="card-link">Google</Link></p>
        <p><Link to="/Thermostat/Amazon" className="card-link">Amazon</Link></p>
      </Card> 
    </div>
  );
}

export default Sidebox;
