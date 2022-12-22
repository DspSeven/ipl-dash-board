// Write your code here
import './index.css'

const MatchCard = props => {
  const {playerDetails} = props
  const newData = {
    competingTeam: playerDetails.competing_team,
    competingTeamLogo: playerDetails.competing_team_logo,
    date: playerDetails.date,
    firstInnings: playerDetails.first_innings,
    manOfTheMatch: playerDetails.man_of_the_match,
    matchStatus: playerDetails.match_status,
    result: playerDetails.result,
    secondInnings: playerDetails.second_innings,
    umpires: playerDetails.umpires,
    venue: playerDetails.venue,
  }
  console.log(newData)
  const {competingTeam, competingTeamLogo, result, matchStatus} = newData
  return (
    <div>
      <img src={competingTeamLogo} alt="team banner" />
      <p>{competingTeam}</p>
      <p>{matchStatus}</p>
      <p>{result}</p>
    </div>
  )
}
export default MatchCard
