const Buttons = ({ name }) => {
  return (
    // bg-white bg-opacity-10 text-white
    <button className="px-4 py-2 m-1 rounded-lg bg-black bg-opacity-90 text-white">
      {name}
    </button>
  );
};

export default Buttons;
