import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  payment_date: yup.date().required(),
  amount: yup.number().integer().required(),
  payment_method: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
