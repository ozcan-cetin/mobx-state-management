import { observer } from "mobx-react-lite";
import formStore from "../stores/FormStore";

const FormComponent = observer(() => {
  const handleUsernameChange = e => {
    formStore.setUsername(e.target.value);
  };

  const handleEmailChange = e => {
    formStore.setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <label>
        Username:
        <input
          type="text"
          value={formStore.username}
          onChange={handleUsernameChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={formStore.email}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <div>
        <strong>Username:</strong> {formStore.username}
      </div>
      <div>
        <strong>Email:</strong> {formStore.email}
      </div>
    </div>
  );
});

export default FormComponent;
