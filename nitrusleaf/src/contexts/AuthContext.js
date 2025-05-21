"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoadingAuth(false);
        return;
      }

      try {
        // Configura token no axios antes da requisição
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data } = await api.get("/auth/me");
        const user = data.user;
        const propriedades = data.propriedades || [];

        setUser({ ...user, propriedades });

        // Carrega propriedade selecionada do localStorage, se houver
        const storedProperty = localStorage.getItem("selectedProperty");
        if (storedProperty) {
          setSelectedProperty(JSON.parse(storedProperty));
        } else if (propriedades.length > 0) {
          setSelectedProperty(propriedades[0]);
          localStorage.setItem("selectedProperty", JSON.stringify(propriedades[0]));
        }
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        handleLogout();
      } finally {
        setLoadingAuth(false);
      }
    }

    loadUser();
  }, []);

    const handleLogin = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, senha: password });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

      const propriedades = data.propriedades || [];

      setUser({ ...data.usuario, propriedades });

      if (propriedades.length > 0) {
        setSelectedProperty(propriedades[0]);
        localStorage.setItem("selectedProperty", JSON.stringify(propriedades[0]));
      } else {
        setSelectedProperty(null);
        localStorage.removeItem("selectedProperty");
      }

      router.push("/dashboard");
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("selectedProperty");
    setUser(null);
    setSelectedProperty(null);
    router.push("/");
  };

  const changeProperty = (propertyId) => {
    if (isNaN(propertyId)) {
      console.error("ID da propriedade inválido:", propertyId);
      return;
    }
    const property = user?.propriedades?.find((prop) => prop.id === propertyId);
    if (property) {
      setSelectedProperty(property);
      localStorage.setItem("selectedProperty", JSON.stringify(property));
    } else {
      console.error("Propriedade não encontrada:", propertyId);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        selectedProperty,
        handleLogin,
        handleLogout,
        changeProperty,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};