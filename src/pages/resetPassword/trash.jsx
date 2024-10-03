const PasswordForm = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex gap-5 items-center m-3">
      <div className="w-full">
        <div className="flex flex-col justify-center">
          <button
            onClick={goBack}
            className="border rounded-full p-1 w-max border-black mb-8 cursor-pointer"
          >
            <FaAngleLeft className="text-2xl font-light" />
          </button>

          <h1 className="text-[#1b1818] font-bold text-3xl mb-1">
            Reset Password
          </h1>
          <h3 className="font-[sora] font-semibold text-sm leading-[25.2px] text-blue-600">
            Input new password below to continue
          </h3>
        </div>

        {/* If loading is true, show the Loader component, else show the form */}
        {loading ? (
          <Loader />
        ) : (
          <Formik
            initialValues={{
              newPassword: "",
              cPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setLoading(true); // Show loader on submit
              setSubmitting(true);
              setTimeout(() => {
                console.log(values);
                setLoading(false); // Hide loader after a delay (simulating API call)
                resetForm();
                setSubmitting(false);
              }, 2000); // Simulate API request duration
            }}
          >
            {({ values, touched, errors, isSubmitting }) => (
              <Form className="flex flex-col gap-4 mt-10">
                {/* Password input fields */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="newPassword"
                    className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
                  >
                    New Password
                  </label>
                  <div
                    className={`flex gap-2 w-full border rounded-md bg-white px-1 py-1 ${
                      errors.newPassword && touched.newPassword
                        ? "border-red-500"
                        : !errors.newPassword && touched.newPassword
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    <Field
                      type={show ? "text" : "password"}
                      name="newPassword"
                      placeholder="Input new password"
                      className="outline-none p-2 w-full"
                    />
                    <button
                      type="button"
                      className="bg-transparent outline-none p-2"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                {/* Confirm password field */}
                <div className="flex flex-col gap-1 my-4">
                  <label
                    htmlFor="cPassword"
                    className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
                  >
                    Confirm Password
                  </label>
                  <div
                    className={`flex gap-2 w-full border rounded-md bg-white px-1 py-1 ${
                      errors.cPassword && touched.cPassword
                        ? "border-red-500"
                        : !errors.cPassword && touched.cPassword
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    <Field
                      type={show ? "text" : "password"}
                      name="cPassword"
                      placeholder="Confirm password"
                      className="outline-none p-2 w-full"
                    />
                    <button
                      type="button"
                      className="bg-transparent outline-none p-2"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <ErrorMessage
                    name="cPassword"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                {/* Password rules */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Validation checks here... */}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
                  disabled={isSubmitting}
                >
                  Reset Password
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Desktop;
