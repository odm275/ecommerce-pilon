import config from '../config';

const initialState = {
  products:[]
};

//reducers
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCTS:
        return {
          ...state,
          user: payload,
        };
      default:
        return state;
    }
  };

export const getShopItems = () => dispatch => {
  config.pilonApi
    .post('/token', {
      token_scope: 'public',
      environment_id: config.environmentId,
    })
    .then(resToken => {
      config.pilonApi
        .get('/products', {
          headers: {
            Authorization: `Bearer ${resToken.data.token}`,
            Accept: 'application/json',
          },
        })
        .then(res => {
            //  ToDo type here for reducer
          console.log(res.data);
          const 
        });
    });
};
