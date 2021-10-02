// Create your own resume data in JSON format
console.log("Resume data in JSON format");
let details='{"Name":"Chokkalingam.S","DOB":"1996-07-17" ,"Qualification":"BE","CollegeName":"National Engineering College","Department":"EEE","WorkExperience":"2years","phno":9080652782 ,"language":"Tamil,English","Hometown":"Tirunelveli","Hobbies":"playing cricket"}';
let resume=JSON.parse(details);
resume.DOB=new Date(resume.DOB);
console.log(resume);


// For the given JSON iterate over all for loops (for, for in, for of, forEach)

// Using For Loop
console.log("\n Using For Loop\n");
let Resume=Object.values(resume);
for(let i=0;i<Resume.length;i++)
{
    console.log(Resume[i]);
}

// Using For in Loop
console.log("\n Using For in Loop\n");
for(let i in resume)
{
    console.log(resume[i]);
}

// Using For of Loop
console.log("\n Using For of Loop\n");
for(let i of Resume)
{
console.log(i);
}

// Using forEach
console.log("\n Using forEach Loop\n");
Resume.forEach((i)=>{
    console.log(i)
});




















