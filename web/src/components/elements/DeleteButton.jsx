import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

const DeleteButton = inject("store")(
  observer(({ store, itemIndex }) => (
    <button
      onClick={e => {
        e.preventDefault();
        store.projectIdeaStore.components.delete(itemIndex);
      }}
    ><span role="img" aria-label="deleteX">&#10060;</span>
    </button>
  ))
);

DeleteButton.propTypes = {
  itemIndex: PropTypes.number.isRequired
};

export default DeleteButton;
