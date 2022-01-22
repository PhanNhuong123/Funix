import { SUBMIT,ADD } from "../contants/action-type";

const searchSubmuit = (payload) => ({ type: SUBMIT, payload });

const addStaff = (payload) => ({type: ADD, payload})

export  {searchSubmuit , addStaff};