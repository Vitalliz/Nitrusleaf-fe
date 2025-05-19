"use client";

import React, { createContext, useState, useEffect } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const router = useRouter();

  // 🚀 Carregar usuário e propriedades ao iniciar
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        await refreshAccessToken();
        const userResponse = await api.get("/auth/me");
        console.log(userResponse.data)
        const propriedadesResponse = await api.get(`/propriedades/user/${userResponse.data.id}`);

        const propriedades = propriedadesResponse.data.sort((a, b) => a.id_propriedade - b.id_propriedade);

        setUser({ ...userResponse.data, propriedades });

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
      }
    };

    loadUser();
  }, []);

  // 🚀 Função para fazer login
  const handleLogin = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, senha: password });

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

      const propriedadesResponse = await api.get(`/propriedades/user/${data.pessoa.id}`);
      const propriedades = propriedadesResponse.data.sort((a, b) => a.id_propriedade - b.id_propriedade);

      setUser({ ...data.usuario, propriedades });

      if (propriedades.length > 0) {
        setSelectedProperty(propriedades[0]);
        localStorage.setItem("selectedProperty", JSON.stringify(propriedades[0]));
      } else {
        setSelectedProperty(null);
        localStorage.removeItem("selectedProperty");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  // 🚀 Função para logout
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("selectedProperty");
    setUser(null);
    setSelectedProperty(null);
    router.push("/");
  };

  // 🚀 Função para renovar o token automaticamente
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) throw new Error("Refresh token não encontrado.");

      const { data } = await api.post("/auth/refresh", { refreshToken });
      localStorage.setItem("accessToken", data.accessToken);
      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
      setUser((prev) => ({ ...prev, token: data.accessToken }));
    } catch (error) {
      console.error("Erro ao renovar token:", error);
      handleLogout();
    }
  };

  // 🚀 Função para trocar propriedade
  const changeProperty = (propertyId) => {
    const property = user?.propriedades?.find((prop) => prop.id_propriedade === parseInt(propertyId));
    if (property) {
      setSelectedProperty(property);
      localStorage.setItem("selectedProperty", JSON.stringify(property));
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        selectedProperty, 
        handleLogin, 
        handleLogout, 
        refreshAccessToken, 
        changeProperty 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};