export const contactConstraint = {
  name: { required: true, min: 5, max: 255 },
  email: { required: true, min: 5, max: 255 },
  subject: { required: true, min: 5, max: 255 },
  message: { required: true, min: 10, max: 500 },
};

export const validate = (obj, constraints) => {
  const errors = {};
  Object.keys(constraints).forEach((key) => {
    const constraint = constraints[key];
    if (obj[key] === undefined || obj[key] === null) {
      if (constraint.required) {
        errors[key] = `${key} is required`;
      }
    } else {
      const value = obj[key];
      if (constraint.min && constraint.min > value.length) 
        errors[key] = `${key} minimum length is ${constraint.min}`;
      else if (constraint.max && constraint.max < value.length) 
        errors[key] = `${key} maximum length is ${constraint.max}`;
    }
  });
  return errors;
};
