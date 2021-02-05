import { produce } from "immer";
import { getRandomInt } from "../util/list";
import {CHANGE_QUOTE,GET_API} from '../action';

export const initState = {
  content: "",
  author: "",
  list: [],
};

export const reducer = (state, action) =>
produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_QUOTE:
      let key1 = getRandomInt(draft.list.length);
      draft.content = draft.list[key1].quote;
      draft.author = draft.list[key1].author;
      break;
    case GET_API:
      draft.list = action.data;
      let key = getRandomInt(draft.list.length);
      draft.content = draft.list[key].quote;
      draft.author = draft.list[key].author;
      break;
    default:
      throw new Error();
  }
});