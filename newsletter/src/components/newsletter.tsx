// import React from "react";
// import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

// // Define the URL for Mailchimp subscription
// const url = import.meta.env.VITE_MAILCHIMP_URL;

// // Define the type for the SimpleForm props
// interface SimpleFormProps {
//   onSubmitted: (formData: EmailFormFields) => void;
// }

// // Define the custom form component
// const SimpleForm: React.FC<SimpleFormProps> = ({ onSubmitted }) => {
//   const [email, setEmail] = React.useState("");

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (onSubmitted) {
//       onSubmitted({ EMAIL: email });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="EMAIL"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Your email"
//         required
//       />
//       <button type="submit">Subscribe</button>
//     </form>
//   );
// };

// // Use the render prop and your custom form
// const Newsletter: React.FC = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <SimpleForm onSubmitted={(formData: EmailFormFields) => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed!</div>}
//       </div>
//     )}
//   />
// );

// export default Newsletter;

import React from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import "./Newsletter.css"; // Import the new CSS file

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
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        className="newsletter-input"
        type="email"
        name="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        required
      />
      <button
        type="submit"
        className="newsletter-button"
      >
        Notify Me
      </button>
    </form>
  );
};

// Combine the functionality with the design layout
const Newsletter: React.FC = () => (
  <div className="newsletter-container">
    <div className="newsletter-grid">
      <div className="newsletter-text">
        <h1 className="newsletter-heading">
          Want to have early bird access to Blaze for free?
        </h1>
        <p className="newsletter-paragraph">Sign up to our newsletter and stay up to date.</p>
      </div>
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={(formData: EmailFormFields) => subscribe(formData)} />
              {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
              {status === "error" && (
                <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
              )}
              {status === "success" && <div style={{ color: "green" }}>Subscribed!</div>}
            </div>
          )}
        />
        <p className="newsletter-privacy">
          We care about the protection of your data. Read our{" "}
          <span>Privacy Policy.</span>
        </p>
      </div>
    </div>
  </div>
);

export default Newsletter;
