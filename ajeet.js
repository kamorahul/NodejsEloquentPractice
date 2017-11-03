var resume =
{
// persional details
personal_details:
{
    name : "Ajeet kumar singh",
    dob: "09-04-1995",
    email:"ajeet.ajeet.aks@gmail.com",
    address:
    {   h_no:22,
        street:"officers colony",
        city:"jalandhar",
        state:"punjab"

    }
},
// educational details
education:
[
{
    type:"secondary",
    insitute:"kendriya vidalaya",
    year:"2011",
    cgpa:"8.6"
},
{
    type:" higher secondary",
    insitute:"kendriya vidalaya",
    year:"2013",
    cgpa:"7.6"
},
{
    type:"btech",
    insitute:"lovely professional university",
    year:"2018",
    cgpa:"7.5"
},
],
//projects devloped
projects:
[
{
    name:"ccplus",
    duration:"1 month",
    description:"Developed an Android APP for basic calculation required by teachers, bankers, students, doctors and engineers. This app performs calculation of Body Mass Index, Density, Interest rates, Speed, Distance and Time, etc. This Application can also do basic unit conversions like conversion of temperature, distance, data used etc in different units. ",
    languages_tools_used:["android studio","java","xml"]
},
{
    name:"sudoku",
    duration:"1 week",
    description:"Developed Sudoku game using Java as a coding language and Java graphics a GUI design",
    languages_tools_used:["java","java graphics"]
}
],
// skills and lanugages known
skills:["C++","C","java","data structures","algorithms","android","seo"],
// hobbies 
hobbies:["playing video games","competitive programming","football","basketball","cooking","learning about mobiles and computer hardware"]

}



console.log(resume)
//  to display 1st project.
console.log(resume.projects[0]);
// to display address
console.log(resume.personal_details.address);
//to display all skills
console.log(resume.skills);
//to display cgps in 10th class
console.log(resume.education[0].cgpa);
// to display all p

