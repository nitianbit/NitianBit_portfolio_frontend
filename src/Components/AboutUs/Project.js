import React, { useState } from 'react'
import ProjectDetailsModal from "./ProjectDetailModal";


export default function Project(props) {
  let [detailsModalShow, setDetailsModalShow] = useState(false);
  let [deps,setDeps] = useState({})

   let detailsModalOpen = (data) =>{
    // open the Modal
    setDetailsModalShow(true);
    setDeps(data);
   }

   let detailModalClose = (data) =>{
    // close the Modal
    setDetailsModalShow(false);
   }

   if(props.resumeProjects && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.sectionName;
    var projects = props.resumeProjects.map((projects)=>{
      return (
        <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={projects.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalOpen(projects)}>
            <div>
              <img
                src={projects.images[0]}
                alt="projectImages"
                height="230"
                style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
              />
              <span className="project-date">{projects.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">
                <a href={projects.link}>{projects.title}</a>
              </p>
            </div>
          </div>
        </span>
      </div>
      )
    })
   }
  return (
    <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={ detailsModalShow}
            onHide={detailModalClose}
            data={ deps}
          />
        </div>
      </section>
  )
}
