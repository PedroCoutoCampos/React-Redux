import React, { useState } from "react";
import { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num); //ter certeza que recebe um number
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function ImparPar(num) {
  const n = parseInt(num); //ter certeza que recebe um number
  let resto = n % 2;
  if (resto === 0) return "Par";
  return "Impar";
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [parImpar, setParImpar] = useState("");

  useEffect(
    function () {
      // função declarada dentro do useEffect para não ter um loop infinito
      setFatorial(calcFatorial(number));
    },
    [number]
  ); // quando esse valor for modificado o (number) essa função sera chamada

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Passou de 1000000";
      } else {
        document.title = "React.App"; //volta o titulo quando foi menor que 1000000
      }
    },
    [fatorial]
  ); // quando esse valor for modificado o (number) essa função sera chamada

  useEffect(
    function () {
      setParImpar(ImparPar(number2));
    },
    [number2]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio 01 " />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não Existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)} //é o valor que o usuario digita o e.target.value
        />
      </div>

      <SectionTitle title="Exercicio 02 " />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">
            {parImpar}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)} //é o valor que o usuario digita o e.target.value
        />
      </div>
    </div>
  );
};

export default UseEffect;
