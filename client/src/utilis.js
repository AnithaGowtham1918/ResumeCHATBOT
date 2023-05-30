import Courses from "./pages/courses";
import Intro from "./pages/intro";
import Project from "./pages/project";
import Skills from "./pages/skills";

export const analyze=(text)=>{
let data=text.toLowerCase();
if(data.includes('hai')||data.includes('hello')||data.includes('hey')){
    return `Hai how are you?`;
}
else if(data.includes('i am fine')||data.includes('i am doing good')||data.includes('fine')){
    return 'Nice! How can I help you?';
}
else if(data.includes('education')||data.includes('qualification')){
    return 'Basically a B.E graduate, currently doing a SOFTWARE DEVELOPMENT course in SCALER'
}
else if(data.includes('skills')||data.includes('skill')){
   // let skill=["Programming Languages:JavaScript,Java"," "," ; ","Library:React,Node"," ","; "," ","Web-Technologies:HTML,CSS"," "," ; "," ","FrameWorks:BootStrap,MaterialUI"," "," ; "," ","DataBase:MONGODB cloud"]
   // return skill;
   return <Skills></Skills>;
}
else if(data.includes('programming language')||data.includes("language")){
    return "Java,JavaScript";
}
else if(data.includes('database')||data.includes('storage')){
    return 'MONDO DB Cloud'
}
else if(data.includes('course done')||data.includes('certificates')||data.includes('certificate')||data.includes('abortcourses')){
    return <Courses></Courses>;
}
else if(data.includes('experience')){
    return 'Worked as a Quality Controller in Merill Technologies Coimbatore from Jan 2017 - Feb 2018';
}
else if(data.includes('name')){
    return 'Anitha';
}
else if(data.includes('company name')){
    return 'Merill Technologies';
}
else if(data.includes('projects')||data.includes('project')){
    return <Project></Project>
}
else if(data.includes('previous salary')){
    return '2.5 Lakhs per Annum';

}
else if(data.includes('hobbies')||data.includes('hobby')){
    return 'Solving problems online'
}
else if(data.includes('anitha')||data.includes('introduction')){
    return <Intro></Intro>
}
else if(data.includes('expected salary')||data.includes('salary expectations')){
    return 'As per the Industry Standard'
}

    return `I can't get you Sorry`;
}