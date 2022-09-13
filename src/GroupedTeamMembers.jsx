import React, { useState } from 'react'

function GroupedTeamMembers({employees, selectedTeam, setTeam}) {

    // By passing a function to the useState hook, it will call that function to store it's data
    const [groupedEmployees, setGroupedEmployees] = useState(groupedTeamMembers())

    // The below code is not DRY and I'm aware of it, just temporary for now
    function groupedTeamMembers() {
        let teams = []

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
        // set Team A to the value of TeamA, the members from the teamAMembers filtered above, and if Team A is selected, the collapsed class will be set to false, which will expand the list item
        let teamA = {team:'TeamA', members:teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true}
        teams.push(teamA)

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
        // set Team A to the value of TeamB, the members from the teamBMembers filtered above, and if Team A is selected, the collapsed class will be set to false, which will expand the list item
        let teamB = {team:'TeamB', members:teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true}
        teams.push(teamB)

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
        // set Team A to the value of TeamC, the members from the teamCMembers filtered above, and if Team A is selected, the collapsed class will be set to false, which will expand the list item
        let teamC = {team:'TeamC', members:teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true}
        teams.push(teamC)

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
        // set Team A to the value of TeamD, the members from the teamDMembers filtered above, and if Team A is selected, the collapsed class will be set to false, which will expand the list item
        let teamD = {team:'TeamD', members:teamAMembers, collapsed: selectedTeam === 'TeamD' ? false : true}
        teams.push(teamD)

        return teams
    }

    function handleTeamClick(event) {
        // This will get the id of the currently clicked item and change the boolean value of that specific team/id combo and return the transformed array. If it is not clicked, then it just returns what it already has
        let transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
                                                                    ? {...groupedData, collapsed:!groupedData.collapsed}
                                                                    : groupedData);
        setGroupedEmployees(transformedGroupData)
        setTeam(event.currentTarget.id)
    }

  return (
    <main className="container">
        {
            groupedEmployees.map((item) => {
                return (
                    <div key={item.team} className='card mt-2' style={{cursor:"pointer"}}>
                        <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                            Team Name: {item.team}
                        </h4>
                        <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""} >
                            <hr />
                            {
                                item.members.map(member => {
                                    return (
                                        <div className="mt-2">
                                            <h5 className="card-title mt-2">
                                                <span className="text-dark">Full Name: {member.fullName}</span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>
                                        </div>
                                    )
                                })
                                }

                        </div>
                    </div>
                    
                )
            })
        }
    </main>
  )
}

export default GroupedTeamMembers