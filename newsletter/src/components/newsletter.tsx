import React from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

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
    <form onSubmit={handleSubmit} className="w-full">
      <fieldset className="form-control w-full max-w-lg">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="flex">
          <input
            className="input input-bordered flex-grow"
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username@site.com"
            required
          />
          <button type="submit" className="btn btn-primary ml-2">
            Subscribe
          </button>
        </div>
      </fieldset>
    </form>
  );
};

// Combine the functionality with the footer design layout
const Newsletter: React.FC = () => (
  <footer className="footer bg-base-200 text-base-content p-10">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Services Section */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <br />
        <a className="link link-hover">Design</a>
        <br />
        <a className="link link-hover">Marketing</a>
        <br />
        <a className="link link-hover">Advertisement</a>
      </nav>

      {/* Company Section */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <br />
        <a className="link link-hover">Contact</a>
        <br />
        <a className="link link-hover">Jobs</a>
        <br />
        <a className="link link-hover">Press kit</a>
      </nav>

      {/* Legal Section */}
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <br />
        <a className="link link-hover">Privacy policy</a>
        <br />
        <a className="link link-hover">Cookie policy</a>
      </nav>

      {/* Newsletter Section */}
      <div className="col-span-1 lg:col-span-1">
        <h6 className="footer-title">Newsletter</h6>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div className="max-w-lg">
              <SimpleForm onSubmitted={(formData: EmailFormFields) => subscribe(formData)} />
              {status === "sending" && <div className="text-blue-400 text-sm">Sending...</div>}
              {status === "error" && (
                <div className="text-red-500 text-sm" dangerouslySetInnerHTML={{ __html: message }} />
              )}
              {status === "success" && <div className="text-green-500 text-sm">Subscribed!</div>}
            </div>
          )}
        />
      </div>
    </div>
  </footer>
);

export default Newsletter;
