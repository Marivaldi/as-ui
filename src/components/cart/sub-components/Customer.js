import React,  {Component} from 'react';
import '../css/Customer.css';
class  Customer extends Component {
  render() { 
    return (  
      <div id="member-container">
        <div id="member" className="card shadow center-vertically full-width">
          <div className="position-relative full-width full-height">
            <div className="center">
              <button type="button" class="btn btn-outline-primary">Add a member</button>
            </div>
          </div>
        </div>
     </div>
    );
  }
}

export default Customer;