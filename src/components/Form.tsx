import { useForm } from 'react-hook-form';

type UserAccountType = 'manual' | 'advanced';

type FormValues = {
  userAccountType: UserAccountType;
  userName: string;
  userPassword: string;
  userServerAddress: string;
  userServerPath?: string;
  userServerPort?: number;
  userUseSSL?: boolean;
};

const Form = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>();

  const isAdvancedSettingsChoosen =
    watch('userAccountType') === 'advanced';

  const onSubmit = (data: FormValues) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <label className="form__label" htmlFor="userAccountType">
            Account Type:
          </label>
          <select
            {...register('userAccountType')}
            defaultValue="manual"
            name="userAccountType"
            id="userAccountType"
            className="form__field"
          >
            <option value="manual">Manual</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="form__wrapper">
          <label className="form__label" htmlFor="userName">
            User Name:
          </label>
          <input
            {...register('userName')}
            name="userName"
            type="email"
            required
            id="userName"
            placeholder="name@example.com"
            className="form__field"
          />
        </div>
        <div className="form__wrapper">
          <label className="form__label" htmlFor="userPassword">
            Password:
          </label>
          <input
            {...register('userPassword')}
            required
            name="userPassword"
            type="password"
            id="userPassword"
            placeholder="Required"
            className="form__field"
          />
        </div>
        <div className="form__wrapper">
          <label className="form__label" htmlFor="userServerAddress">
            Server Address:
          </label>
          <input
            type="url"
            formNoValidate={true}
            {...register('userServerAddress')}
            name="userServerAddress"
            id="userServerAddress"
            placeholder="example.com"
            className="form__field"
          />
        </div>
        {isAdvancedSettingsChoosen && (
          <>
            <div className="form__wrapper">
              <label className="form__label" htmlFor="userServerPath">
                Server Path:
              </label>
              <input
                {...register('userServerPath', {
                  shouldUnregister: true,
                })}
                name="userServerPath"
                id="userServerPath"
                placeholder="/calendars/user/"
                className="form__field"
              />
            </div>
            <div className="form__wrapper">
              <div className="form__label">
                <label htmlFor="userServerPort">Port:</label>
              </div>
              <div className="form__field">
                <input
                  min={0}
                  max={65535}
                  type="number"
                  {...register('userServerPort', {
                    shouldUnregister: true,
                  })}
                  name="userServerPort"
                  id="userServerPort"
                  className="server-port-input"
                />
                <input
                  className="use-ssl-input"
                  type="checkbox"
                  {...register('userUseSSL', {
                    shouldUnregister: true,
                  })}
                  name="userUseSSL"
                  id="userUseSSL"
                />
                <label htmlFor="userUseSSL">Use SSL</label>
              </div>
            </div>
          </>
        )}

        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
