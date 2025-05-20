import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-30Z5KLWBF7"); // Seu ID GA4
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};