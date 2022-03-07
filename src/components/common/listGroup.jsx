import React from "react";

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  //   console.log(selectedItem);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name", // 设置默认 props
  valueProperty: "_id",
};

export default ListGroup;
