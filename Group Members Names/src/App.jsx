import GroupMembers from "./GroupMembers";

const App = () => {
  const groupMembers = [
    "Ashenafi Pawlos",
    "Atnasiya Abebe",
    "Ayub Sufian",
    "Beamlak Kagnew",
    "Beamlak Solomon",
    "Bezawit Abate",
    "Betelhem Wondale",
    "Betrearon Dereje",
    "Abiy Haregot",
    "Hanan Yesuf"
    
  ];

  return (
    <div className="container mx-auto">
      <GroupMembers members={groupMembers} />
    </div>
  );
};

export default App;
