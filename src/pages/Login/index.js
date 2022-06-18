import React from 'react';
import './login.scss';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import logo from '~/assets/images/header-logo.png';

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login">
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>

            <div className="login_content">
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required('*Trường này là bắt buộc'),
                            password: Yup.string().required('*Trường này là bắt buộc'),
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

                                <Box sx={{ py: 2 }}>
                                    <Button
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className="login-button"
                                    >
                                        Đăng nhập
                                    </Button>
                                </Box>
                                <Typography sx={{ textAlign: 'center' }} color="textSecondary" variant="body1">
                                    <Link sx={{ color: '#000' }} component={RouterLink} to="/quen-mat-khau">
                                        Quên mật khẩu?{' '}
                                    </Link>
                                    <Link
                                        sx={{ color: '#ca9222', textDecoration: 'none' }}
                                        component={RouterLink}
                                        to="/dang-ky"
                                        variant="h6"
                                    >
                                        Đăng ký
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

export default Login;