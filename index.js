//import express library
import express, { request, response } from 'express'
//initialize express server

const app = express()
//send data into express in json format
app.use(express.json())

//add a new student (in theory)
app.post('/students',(request, response)=>{
    const newStudents = request.body
    students.push(newStudents)
response.status(201).send(students)

})
//list requests that we want exspress to respond to
app.get('/hello',(request, response)=>{
    //do something ...
    response.send('Hello World!')
})


//start listening on a port
app.listen(3001, () => {
console.log('xxxHello World! xxx')
    console.log('Now listening on port 3001')
})
const students =[ 
    {firstName: 'John', lastName: 'Vegas'},
    {firstName: 'Mason', lastName: 'Madaras'},
    {firstName: 'Logan', lastName: 'McCalley'},
    {firstName: 'Maria', lastName: 'Redman'},
    {firstName: 'Todd', lastName: 'Albert'}
];
app.get('/students', (request, response)=>{
    
response.send(students);
})
// /students/Mason
app.get('/students/:firstName', (request, response) => {
const student = students.find(stud => stud.firstName === request.params.firstName) 
if (!student){
    response.status(404).send({message: 'student not found', success: false})
    return;
}
response.send(student)})
