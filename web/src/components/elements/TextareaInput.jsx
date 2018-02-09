import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import { ReorderButtonUp, ReorderButtonDown } from "./ReorderButtons";

const TextareaInput = inject("store")(
  observer(({ store, itemIndex }) => (
    <div className="">
      <textarea
        value={store.projectIdeaStore.components.items[itemIndex].content}
        onChange={e =>
          store.projectIdeaStore.components.items[itemIndex].changeContent(
            e.target.value
          )
        }
      />
      <ReorderButtonUp itemIndex={itemIndex} />
      <ReorderButtonDown itemIndex={itemIndex} />
      <DeleteButton itemIndex={itemIndex} />
    </div>
  ))
);

TextareaInput.propTypes = {
  itemIndex: PropTypes.number.isRequired
};

export default observer(TextareaInput);
