import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "apollo-link-error";

const DATE_FORMAT = {
  day: "numeric",
  month: "short",
  year: "numeric"
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError} hello Error`);
});

const getGraphQLClient = new ApolloClient({
  // uri: process.env.GRAPHQL_API_URL_DOMAIN,
  cache: new InMemoryCache(),
  link: from([errorLink, createUploadLink({
      uri: process.env.GRAPHQL_API_URL_DOMAIN,
    })
  ]),
  ssrMode: typeof window === 'undefined',
});

const getRemoteIpAddress = (req) => {
  let ip;

  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].split(",")[0];
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.connection.remoteAddress;
  }
  return ip;
};

const validateCaptcha = async (token) => {
  const response = await (
    await fetchData("/api/user/validateCaptcha", "POST", {
      token: token,
    })
  ).json();
  return response;
};

const fetchData = async (url, method = "GET", body = null, headers = null) => {
  url = process.env.STRAPI_API + url;
  let params = { method: method };

  if (body !== null) {
    params["body"] = JSON.stringify(body);
  }

  if (headers !== null) {
    params["headers"] = headers;
  }

  return await fetch(url, params);
};


const getSectionDataBasedOnComponentTypeName = (attributes, sectionName) => {
  if(attributes == null) return null;
  for (let index = 0; index < attributes.length; index++) {
    if(attributes[index] != null){
      const component = attributes[index];
      if(component.hasOwnProperty(sectionName)){
        return component;
      }
    }
  }
  return null;
}

const formatDateProcess = (date, format = null) => {
  return new Date(date).toLocaleDateString("en-GB", (format != null) ? format : DATE_FORMAT)
}

const formatTimeProcess = (date) => {
  return new Date(date).toLocaleTimeString("en-GB", { hour12: true })
}

const navigationSectionKeyReplace = (stringToReplace) => {
  return stringToReplace.replace(/([A-Z]+)/g, ' $1').replace(/^ /, '');
}

export function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export { 
  getGraphQLClient as client, 
  getRemoteIpAddress, 
  validateCaptcha, 
  getSectionDataBasedOnComponentTypeName,
  DATE_FORMAT,
  formatDateProcess,
  formatTimeProcess,
  fetchData,
  navigationSectionKeyReplace,
};
