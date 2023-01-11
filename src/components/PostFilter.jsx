import React from "react";
import UiInput from "./UI/input/UiInput";
import UiSelect from "./UI/select/UiSelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <UiInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <UiSelect
        value={filter.sort}
        onChange={(selestedSort) => setFilter({ ...filter, sort: selestedSort })}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По наименованию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
