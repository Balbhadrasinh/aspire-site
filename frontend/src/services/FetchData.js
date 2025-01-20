import { client } from "../utils/Commons";

const getData = async (query, fetchPolicy = false, variables = null) => {
  var queryCreation = {
    query: query
  };
  
  if (fetchPolicy) {
    queryCreation['fetchPolicy'] = "no-cache";
  }

  if(variables != null){
    queryCreation['variables'] = variables;
  }
  return await client.query(queryCreation);
};

export { getData };
