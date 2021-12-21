# Practical Web Dev Final Project - Client App

### Goal:
Using Node, Express, React, Redux, PostgreSQL, and Sequelize, build a RESTful full-stack web application to manage students and campuses. This will cover all of the CRUD operations: Create, Read, Update, and Delete. This will encompass writing models, querying a database with an ORM, designing routes/endpoints and handler functions to process user requests and generate responses, writing out React Components, managing the state of the application with React-Redux, and much more. This will also involve having two individual repositories/applications (a separate server and a separate client), which encourages separation of concerns and modularity. 

### Team member:

Fnu Tsering - Ftsering81

## User Stories:
User can: 
- [X]  land on a visually pleasing homepage by default, which allows navigation to view all campuses and all students
- [x] can navigate to all campuses view, and
  - [x] see a list of all campuses in the database
  - [x] see an informative message if no campuses exist
  - [x] add a new campus
    - [x] with a validated form displaying real-time error messages
- [x] can navigate to a single campus view, and
  - [x] see details about a single campus, including enrolled students (if any)
  - [x] see an informative message if no students are enrolled at that campus
  - [x] navigate to any student’s single student view 
  - [x] delete the campus 
  - [ ] edit campus information (including adding/removing students)
    - [x] with a validated form displaying real-time error messages
- [x] can navigate to all students view, and
  - [x] see a list of all students in the database
  - [x] see an informative message if no students exist
  - [x] add a new student
    - [x] with a validated form displaying real-time error messages
- [x] can navigate to a single student view, and
  - [x] see details about a single student, including the campus at which they are enrolled (if exists)
  - [x] see an informative message if student is not enrolled at a campus
  - [x] navigate to single campus view of the student’s enrolled campus
  - [x] delete the student
  - [ ] edit the student’s information (including campus s/he is enrolled at)
    - [x] with a validated form displaying real-time error messages
