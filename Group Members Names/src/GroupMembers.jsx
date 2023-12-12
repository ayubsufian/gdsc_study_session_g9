import PropTypes from "prop-types";

const GroupMembers = ({ members }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Group Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index} className="mb-2 text-blue-500">
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
};

GroupMembers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GroupMembers;
