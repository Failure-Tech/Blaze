import React from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
// import "./Newsletter.css"; // Import your custom CSS for any additional styling

// Define the URL for Mailchimp subscription
const url = import.meta.env.VITE_MAILCHIMP_URL;

// Define the type for the SimpleForm props
interface SimpleFormProps {
  onSubmitted: (formData: EmailFormFields) => void;
}

// Define the custom form component with the updated design
const SimpleForm: React.FC<SimpleFormProps> = ({ onSubmitted }) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmitted) {
      onSubmitted({ EMAIL: email });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control w-full max-w-xs">
      <input
        className="input input-sm input-bordered w-full mb-2 bg-base-200 text-gray-300"
        type="email"
        name="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        required
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary w-auto"
      >
        Notify Me
      </button>
    </form>
  );
};

// Combine the functionality with the design layout
const Newsletter: React.FC = () => (
  <div className="bg-base-900 text-white p-4 rounded-lg">
    <div className="grid lg:grid-cols-2 gap-4 items-center">
      <div>
        <h1 className="text-xl font-bold">Lorem Ipsum Dolor</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Sign up to our newsletter and stay up to date.
        </p>
      </div>
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={(formData: EmailFormFields) => subscribe(formData)} />
              {status === "sending" && <div className="text-blue-400 text-sm">Sending...</div>}
              {status === "error" && (
                <div className="text-red-500 text-sm" dangerouslySetInnerHTML={{ __html: message }} />
              )}
              {status === "success" && <div className="text-green-500 text-sm">Subscribed!</div>}
            </div>
          )}
        />
        <p className="text-gray-500 mt-2 text-xs">
          We care about the protection of your data. Read our{" "}
          <span className="text-primary">Privacy Policy.</span>
        </p>
      </div>
    </div>
  </div>
);

export default Newsletter;
