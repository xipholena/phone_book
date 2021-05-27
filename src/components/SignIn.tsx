import React, { FC} from 'react';
import { logInRequest } from '../redux/actions';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
export const SignIn: FC = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const emailValue = watch('email');
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState | any) => state.logUser.isLoading);
  const handleLogin = () => {
    dispatch(logInRequest(emailValue)); // saga watcher listens
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className='form'>
        {' '}
        {/* your form submit function which will invoke after successful validation*/}
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register('email', {
            //name=== errors obj property containing all validation errors for this specific field
            validate: {
              required: value => value.length || 'This field is required', //so validation need to return false to be passed
              isCorrect: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) || 'Invalid email address',
            },
          })}
          className='form__field'
        />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>{errors.email?.message}</span>}{' '}
        {/*errors.email?.message - one entity for all possible messages*/}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register('password', {
            validate: {
              required: value => value.length || 'This field is required',
              length: value => value.length > 8 || 'Needs at least 8 symbols',
              capital: value => value.search(/[A-Z]/) !== -1 || 'Must contain at least 1 capital letter',
              small: value => value.search(/[a-z]/) !== -1 || 'Must contain at least 1 small letter',
              digits: value => value.search(/[0-9]/) !== -1 || 'Must contain at least 1 digit',
            },
          })}
          className='form__field'
        />
        {errors.password && <span>{errors.password?.message}</span>}
        <input type='submit' className='form__button' />
      </form>
      {isLoading ? (
        <div className='dialog'>
          <div className='dialog__overlay'>
            <div className='dialog__window'>
              <p className='dialog__msg'>Getting access...</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
