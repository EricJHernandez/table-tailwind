import React from 'react';
import { useFormik } from 'formik';
import { Input } from '../../components/Input';
import { InputSelect } from '../../components/InputSelect';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.genero) {
        errors.genero = 'Required';
    }

    return errors;
};

const genero = [
    { value: "Hombre" },
    { value: "Mujer" },
]

export const SignupPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            genero: ''

        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="Ingresa un nombre"
                    formik={formik}
                    error={formik.touched.firstName && formik.errors.firstName}
                />
            </div>
            <div className="sm:col-span-3">
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Ingresa un last"
                    formik={formik}
                    error={formik.touched.lastName && formik.errors.lastName}
                />
            </div>
            <div className="sm:col-span-3">
                <Input
                    id="email"
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Ingresa un email"
                    formik={formik}
                    error={formik.touched.email && formik.errors.email}
                />
            </div>
            <div className="sm:col-span-3">
                <InputSelect
                    id="genero"
                    name="genero"
                    label="Genero"
                    placeholder="Selecione un genero"
                    formik={formik}
                    data={genero}
                    optionDefault="Selecione su genero"
                    error={formik.touched.genero && formik.errors.genero}
                />
            </div>
            <button
                onClick={() => formik.handleSubmit()}
            >
                enviar
            </button>
        </div>
    );
};