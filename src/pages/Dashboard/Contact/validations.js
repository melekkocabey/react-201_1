import { object, string } from 'yup';

const required_message = 'Bu alan zorunludur*';
let contactSchema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().email('geçerli bir e-mail adresi belirtin').required(required_message),
    message: string().min(5, '5 karakter giriniz').required(required_message),
});
export default contactSchema;