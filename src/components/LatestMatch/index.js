// Write your code here
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
    <div className="latest-match-container">
      <div className="first-container">
        <p className="latest-match-paragraph">{competingTeam}</p>
        <p className="latest-match-paragraph">{date}</p>
        <p className="latest-match-paragraph">{venue}</p>
        <p className="latest-match-paragraph">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-match-logo"
      />

      <div className="second-container">
        <p className="latest-match-paragraph">{firstInnings}</p>
        <p className="latest-match-paragraph">{manOfTheMatch}</p>
        <p className="latest-match-paragraph">{matchStatus}</p>
        <p className="latest-match-paragraph">{secondInnings}</p>
        <p className="latest-match-paragraph">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
