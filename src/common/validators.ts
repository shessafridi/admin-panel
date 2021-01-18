export const validateTitle = values => {
  const errors: any = {};
  if (!values.title) {
    errors.title = ['The Title is required'];
  }
  return errors;
};

export const validateBirthday = values => {
  const errors: any = {};
  if (!values.name) {
    errors.name = ['Name is required'];
  }
  if (!values.reg) {
    errors.reg = ['Regestration number is required'];
  }
  return errors;
};
