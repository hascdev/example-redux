import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';

const PostValidationSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    correo: Yup.string().email('Invalid email').required('Required'),
    mensaje: Yup.string()
        .min(2, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required')
});

const PostForm = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{ nombre: '', correo: '', mensaje: '' }}
            validationSchema={PostValidationSchema}
            onSubmit={onSubmit}>
            {({ values, errors, touched, handleChange, handleSubmit, handleReset, setFieldTouched, isValid }) => (
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    {console.log(values, errors, touched, isValid)}
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input name="nombre" type="text" value={values.nombre} className={errors.nombre && touched.nombre ? "form-control is-invalid" : !errors.nombre && touched.nombre ? "form-control is-valid" : "form-control"} onChange={handleChange} onKeyUp={() => setFieldTouched("nombre", true)} />
                            {
                            errors.nombre && touched.nombre &&
                            <div className="invalid-feedback">{errors.nombre}</div>
                            }
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="correo">Correo</label>
                            <input name="correo" type="email" value={values.correo} className={errors.correo && touched.correo ? "form-control is-invalid" : !errors.correo && touched.correo ? "form-control is-valid" : "form-control"} onChange={handleChange} onKeyUp={() => setFieldTouched("correo", true)} />
                            {
                            errors.correo && touched.correo &&
                            <div className="invalid-feedback">{errors.correo}</div>
                            }
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="mensaje">Comentario</label>
                            <textarea name="mensaje" value={values.mensaje} placeholder="Escribe aquí tu comentario..." className={errors.mensaje && touched.mensaje ? "form-control is-invalid" : !errors.mensaje && touched.mensaje ? "form-control is-valid" : "form-control"} onChange={handleChange} onKeyUp={() => setFieldTouched("mensaje", true)}></textarea>
                            {
                            errors.mensaje && touched.mensaje &&
                            <div className="invalid-feedback">{errors.mensaje}</div>
                            }
                        </div>
                    </div>
                    <button className="btn btn-primary mr-2" type="submit" disabled={!isValid}> Enviar </button>
                    <button className="btn btn-outline-secondary" type="reset">Limpiar</button>
                </form>
            )}
        </Formik>
    );
};

export default PostForm;
