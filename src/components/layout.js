/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import AppBar from "./AppBar";
import Footer from "./Footer";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <AppBar />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
          height: "100%",
        }}
      >
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
