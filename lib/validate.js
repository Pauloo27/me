export const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
export const contactConstraint = {
  name: { required: true, min: 5, max: 255 },
  email: { required: true, min: 5, max: 255, regex: emailRegex },
  subject: { required: true, min: 5, max: 255 },
  message: { required: true, min: 10, max: 500 },
};

export const validate = (obj, constraints) => {
  const errors = {};
  Object.keys(constraints).forEach((key) => {
    const constraint = constraints[key];
    if (obj[key] === undefined || obj[key] === null || obj[key].trim().length === 0) {
      if (constraint.required)
        errors[key] = `${key} is required`;
    } else {
      const value = obj[key];
      if (constraint.min && constraint.min > value.trim().length)
        errors[key] = `${key} minimum length is ${constraint.min}`;
      else if (constraint.max && constraint.max < value.trim().length)
        errors[key] = `${key} maximum length is ${constraint.max}`;
      else if (constraint.regex && !value.match(constraint.regex))
        errors[key] = `${key} is invalid`;
    }
  });
  return Object.keys(errors).length === 0 ? undefined : errors;
};
