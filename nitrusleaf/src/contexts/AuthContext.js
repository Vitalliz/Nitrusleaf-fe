// src/contexts/AuthContext.js
"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        await refreshAccessToken();
        const { data } = await api.get("/auth/me");
        
        const user = data.user;
        const propriedades = data.propriedades;
        setUser({ ...user, propriedades });

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

  const handleLogin = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", { email, senha: password });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

      const propriedades = data.propriedades.sort((a, b) => a.id_propriedade - b.id_propriedade);

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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("selectedProperty");
    setUser(null);
    setSelectedProperty(null);
    router.push("/");
  };

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