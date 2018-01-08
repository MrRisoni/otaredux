import React, {Component} from 'react';


const BusSideBar = (props) => {
    //let priceBoxStyle = {marginTop :  props.priceBoxMargin + 'px'};


    return (
        <div className="pricebox">

            <div className="card bg-info">
                <div className="card-header">
                    <b>Price Analysis </b>
                </div>
                <div className="card-body text-white">

                    <div className="row">

                        <div className="col-sm-12">
                            <h4>Ticket Price</h4>
                            <hr/>
                        </div>
                    </div>


                </div>


                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-12">

                            <h4> Total Price : {props.pricing.total} {props.currency.code} </h4>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default BusSideBar;


