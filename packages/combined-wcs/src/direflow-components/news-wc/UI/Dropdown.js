import React from "react";

export default function Dropdown(props) {
  const { items, onChangeHandler, styling } = props;

  const dropdownChangeHandler = (event) => {
    onChangeHandler(event.target.value);
  };

  const selectedItem = items.find((el) => el.selected);
  const selectedVal = selectedItem ? selectedItem.value : undefined;

  return (
    <select
      className={styling}
      onChange={dropdownChangeHandler}
      value={selectedVal}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
