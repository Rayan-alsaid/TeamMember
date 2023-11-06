import femaleProfile from './images/femaleProfile.png';
import maleProfile from './images/maleProfile.png';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={(employee.teamName === selectedTeam?'card m-2 standout':'card m-2')}
      style={{ cursor: 'pointer' }}
      onClick={() => handleEmployeeCardClick(employee.id)}
    >
      <img
        src={employee.gender === 'male' ? maleProfile : femaleProfile}
        alt="Employee Profile"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">Designation: {employee.designation}</p>
      </div>
    </div>
  )
}
export default TeamMemberCard;