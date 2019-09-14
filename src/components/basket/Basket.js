import React,  {Component} from 'react';
import { connect } from 'react-redux';
import './Basket.css';
import Item from './Item';
import AddItemButton from './AddItemButton';

class Basket extends Component {
    render() {
        if(!this.props.visible){
          return null;
        }

        return (
          <div className="col-md-8">
            <div className="basket-container full-height">
              <div id="basket" className="card shadow scrollable">
                <header className="container">
                     <div className="row">
                            <div className="col-2 header-col ellipsis">
                            Item
                            </div>
                            <div className="col-3 header-col ellipsis">
                            Price
                            </div>
                            <div className="col-2 header-col ellipsis">
                            Qty.
                            </div>
                            <div className="col-3 header-col ellipsis">
                            Total
                            </div>
                            <div className="col-1"/>
                        </div>
                </header>
                <ol>
                    {this.props.items.map((item) => (
                        <Item key={item.id} item={item} slide={true}/>
                    ))}
                </ol>
              </div>
              <div id="subtotal" className="container">
                <div className="row center-vertically full-width">
                  <div className="col">
                    <span className="larger-text">Total: $150.00</span>
                  </div>
                  <div className="col">
                    <AddItemButton/>
                  </div> 
                </div>
              </div>
            </div>
          </div>
         );
    }
}


const mapStateToProps = state => {
    return {
      ...state.basket
    };
};

export default connect(
  mapStateToProps,
  null
)(Basket)