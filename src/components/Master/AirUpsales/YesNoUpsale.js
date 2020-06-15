import React, {Component} from 'react';
import ButtonToggle from "../../Common/ButtonToggle";


class YesNoUpsale extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        if (ev.target.value == 1) {
            this.props.upsaleHandler(1);

        } else {
            this.props.upsaleHandler(0);
        }
    }

    render() {



        return (
            <section className="upsalesSection">

                <div className="row">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-3">{this.props.title}</div>

                                    <ButtonToggle target="webCheckinCollapse"
                                                  clsName={"offset-6"}/>

                                </div>
                            </div>


                            <div className="card-body collapse" id="webCheckinCollapse">

                                <div className="row">
                                    <div className="col-8">


                                      {this.props.description}
                                    </div>

                                    <div className="col-3">

                                        <select className="form-control" onChange={this.handleClick}>
                                            <option key="no" value="0">No thanks</option>
                                            <option key="yes" value="1">Yes please</option>
                                        </select>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default YesNoUpsale;
