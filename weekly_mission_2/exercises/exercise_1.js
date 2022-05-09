// Guithub data 
const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())



 // Twitter data 
const user ={
    user: "jardon",
    username: "jardon23",
    bio: "...",
    age: 18,
    userage: function(){
        return `The user ${this.user} is ${this.age} years old `
    },
    
 } 
 console.log("UserName:" + user.username)
 console.log("Date user:" + user.userage())

// FACEBOOK DATA

const dataF = {
    user: "javier_jardon",
    age:18,
    bio:"...",
    post: function(){
       return `The user ${this.user} made a post `
    },


    
}
