import React from "react";
import { observer, inject } from "mobx-react";

export const ReorderButtonUp = inject("store")(
  observer(({ store, itemIndex }) => (
    <button
      onClick={e => {
        e.preventDefault();
        store.projectIdeaStore.components.moveUp(itemIndex);
      }}
    >
      &#9650;
    </button>
  ))
);

export const ReorderButtonDown = inject("store")(
  observer(({ store, itemIndex }) => (
    <button
      onClick={e => {
        e.preventDefault();
        store.projectIdeaStore.components.moveDown(itemIndex);
      }}
    >
      &#9660;
    </button>
  ))
);
