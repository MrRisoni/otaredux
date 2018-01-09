import React, {Component} from 'react';


const BusSideBar = (props) => {
    //let priceBoxStyle = {marginTop :  props.priceBoxMargin + 'px'};
    console.log(props.analysis);

    let paxPrices = [];

    props.pricing.analysis.forEach( (paxType) => {
		    if (paxType.count >0) {
		    	paxPrices.push(<div className="row">
                    	<div className="col-sm-12">
                    		{paxType.type} x {paxType.count}  {paxType.ticketPriceEuro} {props.currency.code} 
                    	</div>
		    		</div>)
		    }
    })

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

					{paxPrices}
                

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


