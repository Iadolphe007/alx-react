import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

export default function CourseList() {
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            
            <tbody>
                {listCourses.length > 0 ? (listCourses.map(({id, name, credit}) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)) : (
                     <CourseListRow textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    );
}

CourseList.PropTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
    listCourses: [],
}
