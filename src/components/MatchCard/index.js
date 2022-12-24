// Write your code here
// Write your code here
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
  const wonOrLoss = matchStatus === 'Won' ? 'won-match' : 'lost-match'
  return (
    <li className="list-container-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-para">{competingTeam}</p>
      <p className={wonOrLoss}>{matchStatus}</p>
      <p className="match-card-para">{result}</p>
    </li>
  )
}
export default MatchCard
