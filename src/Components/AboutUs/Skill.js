import React from 'react'

export default function   (props) {
  if (props.sharedSkills && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.skills;
    var skills = props.sharedSkills.map(function (skills, i) {
      skills = skills.icons
      return (
        <li className="list-inline-item mx-3" style = {{listStyleType:"none"}}key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.skillClass} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });
  }

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon" style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>{skills}</ul>
        </div>
      </div>
    </section>
  );
}
