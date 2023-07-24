interface SearchBoxProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBox: React.FC<SearchBoxProps> = ({value, onChange}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="border-2 border-gray-300 focus:border-gray-700 outline-none py-2 px-5 rounded-lg w-[350px]"
    />
  );
};

export default SearchBox;
