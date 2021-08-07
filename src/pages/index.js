import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my Gatsby website</p>
      <p>Am making this while following a tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
