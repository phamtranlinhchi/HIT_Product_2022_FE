import React from 'react';
import './register.scss';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import logo from '~/assets/images/header-logo.png';

function Register() {
    const navigate = useNavigate();

    return (
        <div className="register">
            <Helmet>
                <title>Đăng ký</title>
            </Helmet>

            <div className="register_content">
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: '',
                            username: '',
                            password: '',
                            cfpassword: '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('*Email không hợp lệ')
                                .max(255)
                                .required('*Trường này là bắt buộc'),
                            username: Yup.string().max(255).required('*Trường này là bắt buộc'),
                            password: Yup.string().max(255).required('*Trường này là bắt buộc'),
                            cfpassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
                                .required('*Trường này là bắt buộc'),
                        })}
                        onSubmit={() => {
                            navigate('/', { replace: true });
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link component={RouterLink} to="/">
                                        <img width="100px" src={logo} alt="logo" />
                                    </Link>
                                </Box>
                                <TextField
                                    error={Boolean(touched.username && errors.username)}
                                    fullWidth
                                    helperText={touched.username && errors.username}
                                    label="Tên đăng nhập"
                                    margin="normal"
                                    name="username"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.username}
                                    variant="outlined"
                                />

                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Mật khẩu"
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.cfpassword && errors.cfpassword)}
                                    fullWidth
                                    helperText={touched.cfpassword && errors.cfpassword}
                                    label="Nhập lại mật khẩu"
                                    margin="normal"
                                    name="cfpassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="password"
                                    value={values.cfpassword}
                                    variant="outlined"
                                />

                                <Box sx={{ py: 2 }}>
                                    <Button
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className="register-button"
                                    >
                                        Đăng ký
                                    </Button>
                                </Box>
                                <Typography sx={{ textAlign: 'center' }} color="textSecondary" variant="body1">
                                    Đã có tài khoản?{' '}
                                    <Link
                                        sx={{ textDecoration: 'none' }}
                                        component={RouterLink}
                                        to="/dang-nhap"
                                        variant="h6"
                                    >
                                        Đăng nhập
                                    </Link>
                                </Typography>
                            </form>
                        )}
                    </Formik>
                </Container>
            </div>
        </div>
    );
}

export default Register;
