// Write your code here
// Write your code here
import './index.css'

const LatestMatch = props => {
  const {eachPlayerData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = eachPlayerData
  return (
    <div>
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      <div>
        <p>{firstInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{matchStatus}</p>
        <p>{secondInnings}</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
