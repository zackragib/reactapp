import axios from 'axios'


export const getColorList = (page) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'GET_COLOR_REQUEST',
        });
      
        const {studentList: {students} } = getState()
     
      const { data } = await axios.get(`https://recor-live.herokuapp.com/api/`);
        const dat = ['aa', 'bbb']
        
      dispatch({
        type: 'GET_COLOR_SUCCESS',
        payload: [...data, ...students ]
      });
        
    } catch (error) {
      dispatch({
        type: 'GET_COLOR_FAIL',
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };