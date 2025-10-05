// getDatoCmsToken.ts

/**
 * Returns the DatoCMS token based on the current hostname.
 * Make sure .env contains:
 *   REACT_APP_DATOCMS_ROR_TOKEN=xxxx
 *   REACT_APP_DATOCMS_JAVA_TOKEN=xxxx
 *   REACT_APP_DATOCMS_FRONTEND_TOKEN=xxxx
 *   REACT_APP_DATOCMS_NODE_TOKEN=xxxx
 *   REACT_APP_DATOCMS_DEFAULT_TOKEN=xxxx   (optional fallback)
 */

export const getDatoCmsToken = async (): Promise<string> => {
  const hostname = window.location.hostname;

  let token: string | undefined;

  switch (hostname) {
    case "ror.sumanthsamala.com":
    case "sumanthsamala.com":
    case "ror.localhost":
    case "localhost":
      token = process.env.REACT_APP_DATOCMS_ROR_TOKEN;
      break;

    case "java.sumanthsamala.com":
    case "java.localhost":
      token = process.env.REACT_APP_DATOCMS_JAVA_TOKEN;
      break;

    case "frontend.sumanthsamala.com":
    case "frontend.localhost":
      token = process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN;
      break;

    case "node.sumanthsamala.com":
    case "node.localhost":
      token = process.env.REACT_APP_DATOCMS_NODE_TOKEN;
      break;

    default:
      token = process.env.REACT_APP_DATOCMS_DEFAULT_TOKEN; // fallback
  }

  console.log("🔍 Hostname:", hostname);
  console.log("🔑 Token Found:", token ? "Yes" : "No");

  if (!token) {
    throw new Error(
      `DatoCMS token not set for hostname: ${hostname}.
       Please define the correct REACT_APP_DATOCMS_*_TOKEN in your .env file.`
    );
  }

  return token;
};
