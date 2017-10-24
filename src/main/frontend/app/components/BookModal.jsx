import React from "react";
import DatePicker from "react-toolbox/lib/date_picker";

export default class BookModal extends React.Component {

    componentDidUpdate() {
        const {visible} = this.props;
        if (visible) {
            $(this.element).modal();
        } else {
            $(this.element).modal('hide');
        }
    }

    render() {
        const {onClose} = this.props;
        return (
            <div ref={element => {
                this.element = element
            }} className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" onClick={onClose}>
                            <div className="lr">
                                <div className="rl"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="modal-body">
                                        <a className="btn btn-primary" href="#" role="button">Dzisiaj</a>
                                        <DatePicker label="Portrait Dialog"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




