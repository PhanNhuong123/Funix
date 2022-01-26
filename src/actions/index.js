import { SUBMIT,ADD } from "../contants/action-type";

const searchSubmit = (payload) => ({ type: SUBMIT, payload });

const addStaff = (payload) => ({type: ADD, payload})

export  {searchSubmit , addStaff};