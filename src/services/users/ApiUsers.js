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

export const ShowUser = async () => {
    try {
        const response = await api.get("/listingUser");

        return response.data;
    } catch (error) {
        return "Ocorreu algum erro, verifique com a administração!";
    }
}

export const ShowSearchUser = async () => {
    try {
        let id = window.location.pathname.split("/")[2];
        const response = await api.get(`/searchingUser/${id}`);

        return response.data;
    } catch (error) {
        return "Ocorreu algum erro, verifique com a administração!";
    }
}