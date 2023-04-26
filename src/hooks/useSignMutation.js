import { useContext } from "react";
import { Context } from "../context/context";
import { useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";

export const useSignMutation = (mutation) => {
  const { activeAuth } = useContext(Context);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [sign, { data, loading, error }] = useMutation(mutation);

  const handleSubmit = (credentials) => {
    sign({ variables: { credentials } }).then(({ data }) => {
      const signup = data?.signup || null;
      const login = data?.login || null;
      if (signup) {
        activeAuth(signup);
      } else {
        activeAuth(login);
      }
      window.location.href = from;
    });
  };

  return {
    handleSubmit,
    loading,
    error,
  };
};
