import { useFormik } from 'formik';
import { schema } from './schema';
import InputField from './InputField';
import { inputs } from './constants';

const App = () => {
  
  // Hook that allows us to use all features of Formik
  const formik = useFormik({
    // Initial values for the state to be stored
    initialValues: {
      email: '',
      age: '',
      password: '',
      passwordConfirm: '',
      terms: false,
    },

    // Validation schema
    validationSchema: schema,

    // Function to run when the form is submitted.
    onSubmit: (values, actions) => {
      alert('Form successfully submitted');
      console.log(values);
    },
  });

  return (
    <div className="vh-100 vw-100 bg-dark text-white">
      <div className="container py-5">
        <h2 className="text-center text-warning">Coinmania</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputField formik={formik} data={data} />
          ))}

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
