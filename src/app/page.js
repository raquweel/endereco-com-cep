"use client";

import React from "react";
import { useEffect, useState } from "react";
import Form from "./components/Form";

export default function Home() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [error, setError] = useState("");

  async function callApi(CEP) {
    try {
      const resp = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
      if (resp.status === 200) {
        const obj = await resp.json();

        if (obj.erro) {
          throw new Error("CEP inválido");
        }
        setEndereco({
          logradouro: obj.logradouro,
          bairro: obj.bairro,
          cidade: obj.localidade,
          uf: obj.uf,
        });
      }
    } catch (error) {
      setError("CEP inválido");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="w-full max-w-3xl py-32 px-16">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Address
          </h1>
          <Form
            cep={cep}
            setCep={setCep}
            endereco={endereco}
            callApi={callApi}
            error={error}
            setError={setError}
          />
        </div>
      </main>
    </div>
  );
}
