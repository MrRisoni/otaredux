import React from 'react';

const CabinSegment = (props) => {
    console.log('CabinSegemtns');
    console.log(props);
    const cabinListForSegment = props.seg.cabinList.filter(cb => cb.age == props.pax.type);
    return (


        <div className="card cabinSegment">
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        {props.seg.from}
                    </div>

                    <div className="col-2">
                        {props.seg.to}
                    </div>


                    <div className="col-3">
                            <select className="form-control" id="exampleFormControlSelect2">

                                {cabinListForSegment.map(cb => {
                                   return  (<option>{cb.class} {cb.price} {props.currency.code}</option>)
                                })}

                            </select>

                    </div>

                    {cabinListForSegment.length == 1 &&
                        <div className="col-4">
                            Only one cabin available for this segment
                        </div>
                    }

                </div>
            </div>
        </div>


    )
};

export default CabinSegment;
