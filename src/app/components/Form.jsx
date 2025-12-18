"use client";

import { useState } from "react";

export default function Form({
  cep,
  setCep,
  endereco,
  callApi,
  error,
  setError,
}) {
  const [numero, setNumero] = useState("");

  return (
    <form className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="CEP"
        className={`border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0 text-black
          ${error ? "border-red-500" : "border-gray-400"}
          `}
        value={cep || ""}
        onChange={(event) => {
          setNumero("");
          setError("");
          const value = event.target.value.replace(/\D/g, "");
          setCep(value);
          if (value.length === 8) {
            callApi(value);
          }
        }}
      ></input>

      {error && <p className="text-red-500 text-start">{error}</p>}

      <input
        type="text"
        placeholder="Rua"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0 text-black"
        value={endereco.logradouro || ""}
        readOnly
        onClick={(event) => {
          if (cep.length < 8) {
            callApi(cep);
          }
        }}
      ></input>

      <input
        type="text"
        placeholder="Número"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0 text-black"
        value={numero}
        onChange={(event) => {
          const value = event.target.value.replace(/\D/g, "");
          setNumero(value);
        }}
        onClick={(event) => {
          if (cep.length < 8) {
            callApi(cep);
          }
        }}
      ></input>

      <input
        type="text"
        placeholder="Bairro"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0 text-black"
        value={endereco.bairro || ""}
        readOnly
        onClick={(event) => {
          if (cep.length < 8) {
            callApi(cep);
          }
        }}
      ></input>

      <input
        type="text"
        placeholder="Estado"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0 text-black"
        value={endereco.uf || ""}
        readOnly
        onClick={(event) => {
          if (cep.length < 8) {
            callApi(cep);
          }
        }}
      ></input>

      <input
        type="text"
        placeholder="Cidade"
        className="border border-gray-400 w-100 h-10 p-4 focus:outline-none focus:ring-0 text-black"
        value={endereco.cidade || ""}
        readOnly
        onClick={(event) => {
          if (cep.length < 8) {
            callApi(cep);
          }
        }}
      ></input>
    </form>
  );
}
