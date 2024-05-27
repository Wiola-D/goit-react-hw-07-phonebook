export const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

export const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};
