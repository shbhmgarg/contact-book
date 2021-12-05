import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACTS,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_CONTACT_ERROR
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
        loading: false
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CLEAR_CONTACTS:
      return{
        ...state,
        loading: true,
        error: null,
        contacts: null,
        filtered: null,
        current: null
      }
    case CLEAR_CONTACT_ERROR:
      return {
        ...state,
        errror: null
      }
    default:
      return state;
  }
};
