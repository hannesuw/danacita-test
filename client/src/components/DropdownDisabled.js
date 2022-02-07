const DropdownDisabled = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="capitalize font-semibold">{title}</label>
      <select
        class="select select-bordered w-full max-w-xs"
        disabled="disabled"
      >
        <option disabled="disabled" selected="selected" className="capitalized">
          Select {title}
        </option>
      </select>
    </div>
  );
};

export default DropdownDisabled;
