export default function TabItems({
  dataTabNavigation,
  handleClick,
  activeTab,
}) {
  return (
    <ul className="flex items-center justify-between bg-black p-3">
      {dataTabNavigation.map((item, index) => (
        <li
          key={item.id}
          className={`text-center w-full cursor-pointer ${
            index === activeTab ? "text-green-400" : "text-white"
          }`}
          onClick={() => handleClick(index)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
