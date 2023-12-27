import React, { useEffect, useState } from 'react'
import axios from 'axios'
import About from '../../../../../Temp_pf/react-frontend-dev-portfolio/src/components/About';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Footer from '../Footer/Footer';

export default function index(props) {
    const [resumeData, setResumeData] = useState({});
    const [sharedData, setSharedData] = useState({});

    const loadSharedData = (url)=>{
        axios.get(url).then((res)=>{
            res = res.data;
            setSharedData(res);
        }).
        catch((err)=>{
            console.log("Error on Load Shared Data...\n",err)
        });
    }

    const loadResumeData = (url) =>{
        axios.get(url).then(res=>{
            res = res.data;
            setResumeData(res);
        }).catch(err=>{
            Clearfix("Error on Load Resume Data...\n",err);
        })
    }

    useEffect(()=>{
        loadSharedData(props.sharedDataLink)
        loadResumeData(props.resumeDataLink)
    },[])
  return (
    <div>
        <About 
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
        />
        <Skill 
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
        />
        <Project 
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
        />
        <Experience 
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
        />
        <Footer />
    </div>
  )
}
