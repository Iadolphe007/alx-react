import React, {Component} from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css"

class BodySectionWithMarginBottom extends Component {
    render(props) {
        return (
            <>
                <div className="bodySectionWithMargin">
                    <BodySection {...this.props} />
                </div>
            </>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
  
export default BodySectionWithMarginBottom;