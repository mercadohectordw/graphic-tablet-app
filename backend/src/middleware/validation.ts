import Joi from "joi";

export const registerValidation = (userData:any) => {
  let schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required()
  });

  return schema.validate(userData);
};

export const loginValidation = (logData:any) => {
  let schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required()
  });

  return schema.validate(logData);
};