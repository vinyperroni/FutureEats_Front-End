import { useEffect } from "react";
import useNavigate from "react-router-dom";
import { goToLogin} from "../routes/Coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Favor realizar o login para prosseguir");
      goToLogin(navigate);
    }
  }, [navigate]);
};
