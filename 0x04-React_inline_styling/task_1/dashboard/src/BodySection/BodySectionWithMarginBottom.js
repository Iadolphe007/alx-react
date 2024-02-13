import React, {Component} from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection

class BodySectionWithMarginBottom extends Component {
    render(props) {
        return (
            <>
                <div className="bodySectionWithMargin" style={css(styles.margin)}>
                    <BodySection {...this.props} />
                </div>
            </>
        );
    }
}

const styles = StyleSheet.create({
    margin: {
        margin: "40px",
    }
});

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
  
export default BodySectionWithMarginBottom;