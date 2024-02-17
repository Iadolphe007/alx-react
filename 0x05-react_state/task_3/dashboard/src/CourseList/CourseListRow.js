import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
    return(
        <tr style={css(styles.tr)}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={css(styles.th)}colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                        <th style={css(styles.th)}>{textFirstCell}</th>
                        <th style={css(styles.th)}>{textSecondCell}</th>
                    </>
                )
            ): (
                <>
                    <td style={css(styles.td)}>{textFirstCell}</td>
                    <td style={css(styles.td)}>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

const styles = StyleSheet.create({
    th: {
        borderBottom: "1px solid #ddd",
        width: "80%",
      },
    
      td: {
        width: "80%",
      },
    
      tr: {
        "nth-child(2)": {
          textAlign: "left",
        },
      },
});


CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}
