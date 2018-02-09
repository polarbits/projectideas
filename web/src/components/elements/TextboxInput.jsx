import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import { ReorderButtonUp, ReorderButtonDown } from "./ReorderButtons";

const TextboxInput = inject("store")(
  observer(({ store, itemIndex }) => (
    <div className="">
      <input
        type="text"
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

TextboxInput.propTypes = {
  step: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  itemIndex: PropTypes.number.isRequired
};

export default TextboxInput;
