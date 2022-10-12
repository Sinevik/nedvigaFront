import {useEffect, useState} from 'react';

export const Hook = (
    {
      categoryList,
      selectedCategory,
      mobile,
    },
) => {
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    const arrayNameCategory = categoryList.map((item) => item.name);
    if (!mobile) {
      if (arrayNameCategory.find((item) => item === selectedCategory)) {
        setDropDown(categoryList
            .find((item) => item.name === selectedCategory));
      } else {
        setDropDown(false);
      }
    }

    if (mobile) {
      if (arrayNameCategory.find((item) => item === selectedCategory)) {
        setDropDown(categoryList
            .find((item) => item.name === selectedCategory));
      }

      if (selectedCategory === null) {
        setDropDown(false);
      }
    }
  }, [selectedCategory]);
  return {
    dropDown,
    setDropDown,
  };
};
