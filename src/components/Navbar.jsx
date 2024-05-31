const Navbar = () => {
  const navList = [
    "Learn",
    "How do I participate",
    "Universities",
    "Corporate",
  ];
  return (
    <div>
      <ul className="flex">
        {navList.map((item, index) => (
          <li key={index} className="mx-2">
            <span className="pr-2 text-lg text-[#6B6097]">&#x2022;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
