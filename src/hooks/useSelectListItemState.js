import { useState } from "react";

const useSelectListItemState = (initialValue = []) => {
  const [list, setList] = useState(initialValue);

  const selectItem = (id) => {
    const updatedList = list.map((item) =>
      item.id === id
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    );
    setList(updatedList);
  };

  return [list, selectItem];
};

export default useSelectListItemState;
