//1.Create your own resume in JSON format:
//2.For the above JSON itetrate overall for loops(for in,for of, for Each)
var myResume={
    "basics": 
      {
      "name": "Suganesan T",
      "email": "suganesan71@gmail.com",
      "phone": 6380081172,
      "degree": "B.E",
      },
    
"location": 
  {
        "address": "No17, Azhagiri street, Pallikaranai, Chennai",
        "postalCode": 600100,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
"skills": 
        {
            "Technical skills": "Auto cad, MS Office",
            "Non technical skills": "Leadership quality, Communication skills"
        },
"education": 
      {
        "institution": "Easwari Engineering College",
        "department": "Automobile Engineering",
        "Passed out Year": 2023,
        "gpa": 8.84,
      },
"Experience": 
        {
          "company": "Ashok Leyland",
          "position": "Production Executive",
          "startDate": "september 2023",
          "endDate": "December 2023",
          "summary": "I worked as a production supervisor in HCV vehicles manufacturing line where i am responsible for daily production of vehicles without any defects",
        },
"languages": 
      {
        "language": "Tamil,Enlish,Hindi",
      },
"interests": 
      {
        "name": "Reading books,solving Puzzles,Playing cricket",
      }
  }
  //for in loop
  for(var i of Object.keys(myResume)){
    console.log('values:${myResume[key]}')
  // for of loop
  var keys=Object.keys(myResume)
  var internalkeys=[]
  for(var i in keys){
    internalkeys.push(Object.keys(keys[i]))
  }
  console.log(internalkeys)
//for Each loop
Object.keys(myResume).forEach((j)=>{
  console.log(j,myResume[j])
})
// for loop
for(var k=o;k<internalkeys.length;k++){
  console.log(internalkeys[k])
}

  }
  