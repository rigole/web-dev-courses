import { CHANGE_SEARCHFIELD } from "./constants";

export const setSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
})