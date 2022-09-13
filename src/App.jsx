import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import { useState, useEffect } from 'react'

function App() {
  // This will select the item that is in local storage, if it exists, or pull in the hard-coded value that we have passed in previously
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [{

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

    // This function will set the current list of employees to the local storage, which can be used as the default setting for the employees within the employee list
    useEffect(() => { 
      localStorage.setItem('employeeList', JSON.stringify(employees))
    }, [employees])

    // This function will set the currently selected team in local storage, which can then be used to determine the default setting for the selected team
    useEffect(() => { 
      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
    }, [selectedTeam])

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
    <div>
      <Header 
        selectedTeam={selectedTeam}
        // This will filter the employees array and look for the people in the selected team and get the length of that array
        // That number will be passed to the Header.jsx file to be usable for displaying the number of people on the selected team
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees  
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      /> 
      <Footer />
    </div>
  );
}

export default App;
