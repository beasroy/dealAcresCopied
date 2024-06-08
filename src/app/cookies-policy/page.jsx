import React from "react";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const CookiePolicy = () => {
  return (
    <div
      className={`w-full px-4 py-8 md:px-10 lg:px-20 xl:px-32 ${roboto.className}`}
    >
      <div className="w-full h-auto text-center bg-[#ccdfff] py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0061FD] tracking-wide">
          Cookies
        </h1>
      </div>

      <div className="container mx-auto mt-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Cookies Policy</h1>

        <p className="text-sm md:text-base">
          Welcome to Deal Acres, your trusted real estate advertisement
          platform. We want to make sure you understand how we use cookies on
          our website, so here's an uncomplicated resolution.
        </p>

        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            What Are Cookies?
          </h2>
          <p className="text-sm md:text-base">
            Cookies are like remote helpers that remember things when you visit
            websites. They are tiny text files stored on your computers, phone,
            or any other device.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            How We Use Cookies
          </h2>
          <ul className="list-disc pl-6 text-sm md:text-base">
            <li className="mt-2">
              Essential Cookies: These cookies are essential for our website to
              work correctly. They let you move around the site, use its
              features, and keep your information secure.
            </li>
            <li className="mt-2">
              Performance Cookies: We use these cookies to understand how you
              use our website. It helps us make our website work better and
              gives you a smoother experience. These cookies don't know who you
              are.
            </li>
            <li className="mt-2">
              Functionality Cookies: These cookies remember your preferences,
              like your language choice, so you don't have to set them every
              time you visit.
            </li>
            <li className="mt-2">
              Advertising Cookies: Sometimes, we use these cookies to show you
              ads that fit your interests, both on our site and other websites.
            </li>
            <li className="mt-2">
              Analytics Cookies: We use these cookies to see how people use our
              site. It helps us figure out what's working well and what we can
              improve.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Your Choices About Cookies
          </h2>
          <p className="text-sm md:text-base">
            You can decide how you want cookies to work for you. Most web
            browsers let you manage cookies in their settings. You can accept or
            reject cookies or delete them if the website wants to use one. Keep
            in mind that if you say no to cookies, some parts of Deal Acres
            might not work as smoothly.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Third-Party Cookies
          </h2>
          <p className="text-sm md:text-base">
            Sometimes, we work with other trusted websites that may also use
            cookies on our site. These cookies can do different things, like
            counting your visit or showing ads. We don't control these cookies,
            so check out their policies to learn more.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Changes to Our Cookies Policy
          </h2>
          <p className="text-sm md:text-base">
            Every now and then, we might update this Cookies Policy to keep
            things in line with the law or make our site even better. If we make
            changes, we'll let you know here. If you keep using Deal Acres, that
            means you're okay with the changes.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
          <p className="text-sm md:text-base">
            If you have questions or concerns about our Cookies Policy, just
            reach out to us at:
          </p>
          <ul className="list-disc pl-6 text-sm md:text-base">
            <li className="mt-2">
              Email:{" "}
              <a href="mailto:contact@dealacres.com">contact@dealacres.com</a>
            </li>
          </ul>
        </div>

        <p className="mt-4 text-sm md:text-base">
          Thanks for choosing Deal Acres for your real estate needs. We're all
          about making your online experience smooth and secure, and we value
          your privacy.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
