import React, { useEffect, useState } from 'react'
import axios from 'axios'
import About from './AboutUs';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Footer from '../Footer/Footer';
import "../../App.scss";

export default function Index(props) {
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
            console.log(res,"\n\ncoming")
            setResumeData(res[0]);
            console.log(resumeData[0])
        }).catch(err=>{
            console.log("Error on Load Resume Data...\n",err);
        })
    }

    useEffect(()=>{
        //loadSharedData(props.sharedDataLink)
        loadResumeData(props.resumeDataLink)
        console.log(resumeData)
    },[])
  return (
    <div>
        <About 
        resumeBasicInfo={resumeData.resumeBasicInfo}
        sharedBasicInfo={resumeData.resumeBasicInfo}
        />
            <Project 
            resumeProjects={resumeData.resumeProjects}
            resumeBasicInfo={resumeData.resumeBasicInfo}
            />
        <Skill 
        sharedSkills={resumeData.sharedSkills}
        resumeBasicInfo={resumeData.resumeBasicInfo}
        />
        <Experience 
        resumeExperience={resumeData.resumeExperience}
        resumeBasicInfo={resumeData.resumeBasicInfo}
        />  
        <Footer />
    </div>
  )
}
