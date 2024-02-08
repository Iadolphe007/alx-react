import React, {Component} from "react";
import PropTypes from "prop-types";

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