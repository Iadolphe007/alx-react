import React from "react";
import PropTypes from 'prop-types';

export default function CourseListRow(props) {
    return(
        <tr>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ): (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool(false),
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}
