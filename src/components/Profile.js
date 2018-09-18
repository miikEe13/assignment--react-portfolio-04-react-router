import React, { Component } from 'react';
import SkillsList from './profile/SkillsList';
import EducationHistory from './profile/EducationHistory';
import WorkHistory from './profile/WorkHistory';
import ShowHideTech from './Technologies/ShowHideTech';
import Header from "./Header";

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <Header headerTitle="Cv view" />
                <SkillsList dataSkills={this.props.skills}/>
                <EducationHistory dataEducation={this.props.eduList}/>
                <WorkHistory dataJob={this.props.jobList}/>
                <ShowHideTech/>
            </div>
        )
    }
}

export default Profile;