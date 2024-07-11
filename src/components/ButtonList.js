import Buttons from "./Buttons";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Gaming",
    "Cooking",
    "Business",
    "Study",
    "Education",
    "Sports",
    "Music",
    "Movies",
    "History",
    "Live",
  ];

  return (
    <div className="p-2">
      {buttonNames.map((name) => (
        <Buttons key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
