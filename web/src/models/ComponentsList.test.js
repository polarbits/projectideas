import {getSnapshot, onSnapshot, onPatch} from "mobx-state-tree"
import {ComponentStore,ComponentListItem} from "./ComponentList"

it("can create a instance of a model", () => {
  const item = ComponentListItem.create({
    type: 'textarea',
    content: 'This is first task todo in this project'
  });
  expect(item.type).toBe("textarea");
  expect(item.content).toBe("This is first task todo in this project");
  item.changeType("image")
  expect(item.type).toBe("image");
})

it("can create a component list", () => {
  const list = ComponentStore.create({
    items: [
      {
        type: 'textarea',
        content: 'This is first task todo in this project'
      }
    ]
  });
  expect(list.items.length).toBe(1)
})

it('can add new item(component)',() => {
  const list = ComponentStore.create()
  list.add({
    type: "textarea",
    content: "test text content"
  })
  const states = [];
  onSnapshot(list, snapshot => {
    states.push(snapshot);
  })

  expect(list.items.length).toBe(1)
  expect(list.items[0].type).toBe("textarea")
  list.items[0].changeContent("new content")
  expect(list.items[0].content).toBe("new content")

  expect(getSnapshot(list)).toEqual({
    items:[
      {
        type: "textarea",
        content: "new content"
      }
    ]
  })

  expect(getSnapshot(list)).toMatchSnapshot()
})

it('can add new item(component) - 2',() => {
  const list = ComponentStore.create()
  list.add({
    type: "textarea",
    content: "test text content"
  })

  const patches = [];
  onPatch(list, patch => {
    patches.push(patch);
  })

  list.items[0].changeContent("new content")

  expect(patches).toMatchSnapshot();
})

if("can calculate the total number of steps", () => {
  const list = ComponentStore.create({
    items: [
      {
        type: 'textarea',
        content: 'This is first task todo in this project'
      },
      {
        type: 'textarea',
        content: 'This is second task todo in this project'
      },
      {
        type: 'textarea',
        content: 'This is third task todo in this project'
      },
      {
        type: 'textarea',
        content: 'This is fourth task todo in this project'
      }
    ]
  })

  expect(list.totalSteps).toBe(4);
  let changed = 0
  reaction (()=> list.totalSteps, ()=>changed++)
  expect(changed).toBe(0)
  console.log(list.totalSteps)
  list.item[0].changeContent("test")
  expect(changed).toBe(0);
  list.add({
    type: 'textarea',
    content: 'This is fifth task todo in this project'
  })
  expect(changed).toBe(1);
})