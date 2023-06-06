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
else if(data.includes('salary')||data.includes('salary expectations')){
    return 'As per the Industry Standard'
}
else if(data.includes('objective')||data.includes('aim')||data.includes('Summary')){
    return "Motivated and ambitious fresher actively seeking an Associate Software Developer role, driven by a strong desire to excel in the field of software development. Actively learning and improving skills in Data Structures and Algorithms (DSA), firmly believing in the power of consistent learning and growth. Demonstrated practical experience by successfully creating and deploying a project called ResumeChatBot, showcasing innovation and forward-thinking for future technologies. Possesses a solid foundation in programming languages, coupled with analytical thinking and problem-solving abilities."
}

    return `I can't get you Sorry`;
}