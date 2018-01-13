const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {
          ...state,
          ...action.group
      }
    default:
      return state
  }
}

export default user
