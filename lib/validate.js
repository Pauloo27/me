export const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

export const contactConstraint = {
  name: { required: true, min: 4, max: 255 },
  email: {
    required: true, min: 4, max: 255, regex: emailRegex,
  },
  subject: { required: true, min: 5, max: 255 },
  message: { required: true, min: 10, max: 1500 },
}

export const validate = (obj, constraints) => {
  const errors = {}
  Object.keys(constraints).forEach((key) => {
    const constraint = constraints[key]
    if (obj[key] === undefined || obj[key] === null || obj[key].trim().length === 0) {
      if (constraint.required)
        errors[key] = { message: 'is required', type: 'required' }
    } else {
      const value = obj[key]
      if (constraint.min && constraint.min > value.trim().length)
        errors[key] = { message: `minimum length is ${constraint.min}`, type: 'min', extra: constraint.min }
      else if (constraint.max && constraint.max < value.trim().length)
        errors[key] = { message: `maximum length is ${constraint.max}`, type: 'max', extra: constraint.max }
      else if (constraint.regex && !value.match(constraint.regex))
        errors[key] = { message: 'is invalid', type: 'invalid' }
    }
  })
  return Object.keys(errors).length === 0 ? undefined : errors
}
