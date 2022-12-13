import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://github.com/arsize/resume-web`,
    author: "arsize",
    contact: "https://github.com/arsize",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {},
        },
      },
    },
  ],
};

export default config;
