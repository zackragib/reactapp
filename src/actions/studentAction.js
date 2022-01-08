import {
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_MORE_STUDENT_SUCCESS,

  STUDENT_DETAIL_REQUEST,
  STUDENT_DETAIL_SUCCESS,
  STUDENT_DETAIL_FAIL,

  STUDENT_UPDATE_REQUEST,
  STUDENT_UPDATE_SUCCESS,
  STUDENT_UPDATE_FAIL,

  STUDENT_CREATE_REQUEST,
  STUDENT_CREATE_SUCCESS,
  STUDENT_CREATE_FAIL,

  STUDENT_DELETE_REQUEST,
  STUDENT_DELETE_SUCCESS,
  STUDENT_DELETE_FAIL,
  STUDENT_DELETE_RESET,

} from '../constants/studentConstants'
import axios from "axios";

export const getStudentList = (keywor, page) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_STUDENT_REQUEST,
      });
      
      
      const { data } = await axios.get(`https://recor-live.herokuapp.com/api${keywor}/?page=${page}`);
     
      
      dispatch({
        type: GET_STUDENT_SUCCESS,
        payload: data,
      });
      
     
      
    
        
    } catch (error) {
      dispatch({
        type: GET_STUDENT_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
};
  


export const getStudentDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_DETAIL_REQUEST,
    });
      
    const { data } = await axios.get(`https://recor-live.herokuapp.com/api/students/${id}`);

    dispatch({
      type: STUDENT_DETAIL_SUCCESS,
      payload: data,
    });
      
  } catch (error) {
    dispatch({
      type: STUDENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateStudent = (student) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_UPDATE_REQUEST,
    });
      
    const { data } = await axios.put(
      `https://recor-live.herokuapp.com/api/students/${student.id}/update/`,
      student
    );

    dispatch({
      type: STUDENT_UPDATE_SUCCESS,
      payload: data,
    });
      
  } catch (error) {
    dispatch({
      type: STUDENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createStudent = (student) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_CREATE_REQUEST,
    });
      
    const { data } = await axios.post(
      `https://recor-live.herokuapp.com/api/students/create/`,
        student
    );

    dispatch({
      type: STUDENT_CREATE_SUCCESS,
      payload: data,
    });
      
  } catch (error) {
    dispatch({
      type: STUDENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_DELETE_REQUEST,
    });
      
    const { data } = await axios.delete(
      `https://recor-live.herokuapp.com/api/students/${id}/delete/`,
        
    );

    dispatch({
      type: STUDENT_DELETE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: STUDENT_DELETE_RESET,
    });
      
  } catch (error) {
    dispatch({
      type: STUDENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

