import api from "../api";

export const LoginUser = async (data) => {
    try {
        const response = await api.post("/login", data);

        localStorage.setItem("token", data);
        setTimeout(function () {
            window.location.href = "/home";
        }, 2500);

        return "Sucesso em sua autenticação!";
    } catch (error) {
        return "Os seus dados foram inseridos corretamente?";
    }
}