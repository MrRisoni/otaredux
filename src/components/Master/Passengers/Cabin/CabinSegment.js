import React from 'react';

const CabinSegment = (props) => {
    console.log('CabinSegemtns');
    console.log(props);
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


                    <div className="col-4">
                            <select className="form-control" id="exampleFormControlSelect2"
                                    onChange={props.changeLanguageHandler}>
                                <option>1</option>
                                <option data-thumbnail="http://localhost:3000/langs/ru.png">2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                    </div>

                </div>
            </div>
        </div>


    )
};

export default CabinSegment;
