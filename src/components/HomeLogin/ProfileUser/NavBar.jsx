import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm';
import { toast } from 'react-toastify';
import userActions from '../../../../../../redux/actions/userActions';

const useStyles = makeStyles({
  span: {
    marginLeft: 10,
  },
});

// React Hook Form
const loginSchema = yup.object({
  email: yup
    .string()
    .min(6, 'Email minimum length is 6')
    .email('You have to input correct email!')
    .required('Your email is required!'),
  password: yup
    .string()
    .min(8, 'Password minimum length is 8')
    .required('Your password is required!'),
});

function LoginFormManagement({ login }) {
  const classes = useStyles();
  const [responseErrors, setResponseErrors] = useState({});
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await login(email, password);
      toast.success('Login successfully!');
    } catch (error) {
      setResponseErrors({ message: error.message });
    }
  };

  return (
    <Box component='div'>
      <Button aria-describedby={id} onClick={handleClick}>
        <FontAwesomeIcon icon={faUserAlt} className='navbar__icon-6' />
        <Box component='span' className={classes.span}>
          Đăng nhập
        </Box>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <LoginForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          responseErrors={responseErrors}
        />
      </Popover>
    </Box>
  );
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  login: userActions.login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormManagement);
