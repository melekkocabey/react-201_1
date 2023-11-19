import { useFormik } from 'formik';
import React from 'react'
import validations from "./validations";
import "./styles.css";

function Contact() {
    const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik(
        {
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            },
            onSubmit: async (values, bag) => {
                await new Promise((r) => setTimeout(r, 1000)); //bekleme süreci

                if (values.email === 'melekkocabey14@gmail.com') {
                    return bag.setErrors({ email: 'Bu mail adresi zaten kullanılıyor' });
                }
                console.log((values));
                console.log((bag));


                bag.resetForm();

            },
            validationSchema: validations,
        }
    );
    console.log(touched);
    //touched altında herhangi bir inputta tıklan ayrıldığında true false döner
    //formun gönderilme durumunda yükleniyor ifadesi(setTimeout) 
    //inputları reactif(isSubmitting)
    // ve form gönderim işlemi bitmiş olduktan sonra inputları formu temizleme(bag, resetForm)
    return (
        <div>
            <h2>İletişim</h2>
            {/*  <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                }}//property tanımlarını yap (başlangıç değerleri)
                onSubmit={(values) => {
                    console.log((values));
                }}//bu form gönderildiğinde ilgili verileri kullanmak isteyeceğimiz yer 
            //bize values isminde bir parametre veriyor ve bu parametre altında forma girmiş olduğumuz 
            //bütün bilgileri bul
            > */}


            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" placeholder="Jane" disabled={isSubmitting} value={values.firstName} onChange={handleChange("firstName")} onBlur={handleBlur('firstName')} />
                </div>
                {
                    errors.firstName && touched.firstName && (<div className='error'>{errors.firstName}</div>
                    )}
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" placeholder="Doe" disabled={isSubmitting} value={values.lastName} onChange={handleChange("lastName")} onBlur={handleBlur('lastName')} />
                </div>
                {
                    errors.lastName && touched.lastName && (<div className='error'>{errors.lastName}</div>
                    )}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        disabled={isSubmitting}
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur('email')}
                    />
                </div>
                {
                    errors.email && touched.email && (<div className='error'>{errors.email}</div>
                    )}
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        disabled={isSubmitting}
                        value={values.message}
                        onChange={handleChange("message")}
                        onBlur={handleBlur('message')}
                    /></div>
                {
                    errors.message && touched.message && (<div className='error'>{errors.message}</div>
                    )}
                <div> <button type="submit" disabled={isSubmitting}>Submit</button></div>
            </form>
        </div >
    )
}

export default Contact