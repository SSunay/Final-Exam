import * as Yup from 'yup';
 
export const SignupSchema = Yup.object().shape({
    img: Yup.string()
    .min(2, 'Too Short!')
    .max(50000, 'Too Long!')
    .required('Please, Fill the section !!!'),
    price: Yup.number()
    .min(2, 'Too Short!')
    .max(5000000, 'Too Long!')
    .required('Please, Fill the section !!!'),
    title: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Please, Fill the section !!!'),
   
});
