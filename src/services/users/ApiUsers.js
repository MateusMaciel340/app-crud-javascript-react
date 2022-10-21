import api from "../api";

export const LoginUser = async (data) => {
    try {
        const response = await api.post("/login", data);

        localStorage.setItem("token", response.data);
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

export const EditingUser = async (data) => {
    try {
        let id = window.location.pathname.split("/")[2];
        const response = await api.put(`/updatedUser/${id}`, data);

        setTimeout(function () {
            window.location.href = "/users";
        }, 2000);

        return "Dados atualizados com sucesso!";
    } catch (error) {
        return "Ocorreu algum problema em sua atualização!";
    }
}

export const PostingUser = async (data) => {
    try {
        const response = await api.post("/addingUser", data);

        setTimeout(function () {
            window.location.href = "/users";
        }, 2000);

        return "Dados cadastrados com sucesso!";
    } catch (error) {
        return "Não foi possível adicionar um novo usuário"
    }
}

export const AuthenticatedUser = async () => {
    try {
        const response = await api.get("/authUser");

        return response.status;
    } catch (error) {
        return error.response.status;
    }
}