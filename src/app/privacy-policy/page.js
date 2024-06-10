/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Privacy Policy | Bookable",
};

export default function PrivacyPolicy() {
  return (
    <div className="container space-y-14 pt-[160px]">
      <div className="space-y-5">
        <h1>Privacy Policy</h1>
        <p className="font-kumbh-sans text-primary-secondary-2">
          Welcome to [Your Company Name]. Before using our logo design service,
          please carefully review the following Terms and Conditions, as they
          govern the contractual relationship between you (the "Client") and
          [Your Company Name] (the "Service Provider"). By using our logo design
          service, you acknowledge that you have read, understood, and agreed to
          these Terms and Conditions in their entirety.
        </p>
      </div>

      <div className="space-y-5">
        <h1>→ What data do we process?</h1>
        <div className="space-y-6">
          <p className="font-kumbh-sans text-primary-secondary-2">
            a. [Your Company Name] will provide custom logo design services to
            the Client based on the specifications provided by the Client.{" "}
          </p>
          <p className="font-kumbh-sans text-primary-secondary-2">
            b. The Service Provider will deliver the final logo design in the
            agreed-upon format upon completion and full payment of the service
            fee.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <h1>→ What are your rights?</h1>
        <div className="space-y-6">
          <p className="font-kumbh-sans text-primary-secondary-2">
            a. The Client acknowledges that all rights, title, and ownership of
            the final logo design will belong solely to the Client after full
            payment has been received by the Service Provider.
          </p>
          <p className="font-kumbh-sans text-primary-secondary-2">
            b. Final payment ensures that only the agreed design becomes the
            client’s property. Any previous ideas/concepts remain the property
            of The Service Provider, unless any prior agreement has been made.
          </p>

          <p className="font-kumbh-sans text-primary-secondary-2">
            c. The Service Provider reserves the right to showcase the completed
            logo design in their portfolio or promotional materials.
          </p>
        </div>
      </div>
    </div>
  );
}
