import { useForm } from 'react-hook-form';
import '../styles/form.scss';

const Form = () => {
  const { register, handleSubmit, watch } = useForm();

  const isAdvancedSettingsChoosen =
    watch('user-account-type') === 'advanced';

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__element">
          <label htmlFor="user-account-type">Account Type:</label>
          <select
            {...register('user-account-type')}
            defaultValue="manual"
            name="user-account-type"
            id="user-account-type"
          >
            <option value="manual">Manual</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="form__element">
          <label htmlFor="user-name">User Name:</label>
          <input
            {...register('user-name')}
            name="user-name"
            type="email"
            required
            id="user-name"
            placeholder="name@example.com"
          />
        </div>
        <div className="form__element">
          <label htmlFor="user-password">Password:</label>
          <input
            {...register('user-password')}
            required
            name="user-password"
            type="password"
            id="user-password"
            placeholder="Required"
          />
        </div>
        <div className="form__element">
          <label htmlFor="user-server-address">Server Address:</label>
          <input
            type="url"
            {...register('user-server-address')}
            name="user-server-address"
            id="user-server-address"
            placeholder="example.com"
          />
        </div>
        {isAdvancedSettingsChoosen && (
          <>
            <div className="form__element">
              <label htmlFor="user-server-path">Server Path:</label>
              <input
                {...register('user-server-path')}
                name="user-server-path"
                id="user-server-path"
                placeholder="/calendars/user/"
              />
            </div>
            <div className="form__element">
              <label htmlFor="user-server-port">Port:</label>
              <input
                type="number"
                {...register('user-server-port')}
                name="user-server-port"
                id="user-server-port"
              />
            </div>
            <div className="form__element">
              <label htmlFor="user-use-ssl">Use SSL</label>
              <input
                type="checkbox"
                {...register('user-use-ssl')}
                name="user-use-ssl"
                id="user-use-ssl"
              />
            </div>
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
