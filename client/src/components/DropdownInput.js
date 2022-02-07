const DropdownInput = ({ title, data, fun }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-semibold capitalize">{title}</label>
      <select
        className="select select-bordered select-primary w-full max-w-xs"
        name={title}
        onChange={(e) => fun(e)}
      >
        <option disabled="disabled">Select {title}</option>
        {data.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownInput;
