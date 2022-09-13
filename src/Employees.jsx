import React from 'react'
import { useState } from 'react'
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

function Employees() {

    const [selectedTeam, setTeam] = useState("TeamB")

    const [employees, setEmployees] = useState([{


        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }])

      // This function will change the Team's selection when the onChange event takes place
      // Event needs to be passed to it, to know when the event happens
      // The function will then change the value to the event.target.value, which is the selected item from the dropdown
      function handleTeamSelectionChange(event) {
        setTeam(event.target.value)
        console.log(event.target.value)
      }

      // This function will be called when a team member's card is clicked.
      // If the team member is part of the team already,t hey will be removed from the team
      // If they're not part of the team, they will be added to the team
      // The setEmployees function uses the useState hook to pass in the transformedEmployees data
      function handleEmployeeCardClick(event) {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                                    ? employee.teamName === selectedTeam ? {...employee, teamName:''}
                                                    : {...employee,teamName:selectedTeam}
                                                    : employee)

        setEmployees(transformedEmployees)
      }                

  return (
    <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
                <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>

                </select>
            </div>
        </div>

        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
                <div className="card-collection">
                    {
                        employees.map((employee) =>  (
                            // className will change if it has a box-shadow if the teamName is the same as the dropdown's selected teamName, otherwise, it will have no box-shadow
                            <div 
                                key = {employee.id} id={employee.id} 
                                className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} 
                                style={{cursor:"pointer"}} 
                                onClick={handleEmployeeCardClick}
                            >
                                {/* Ternary will display the proper male/female image based on the gender in the employee object.
                                */}
                                {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top"/>
                                                              : <img src={femaleProfile} className="card-img-top"/>}
                                
                                <div className="card-body">
                                    <h5 className="card-title"> Full Name: {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees