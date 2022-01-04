import { useContext } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const payload = await mutate({ variables: { username, password } });
    const { data } = payload;
    return payload;
  };

  return [signIn, result];
};

export default useSignIn;