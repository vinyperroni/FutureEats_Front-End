import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { goToLogin} from "../routes/Coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tknFutureEats");

    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};
