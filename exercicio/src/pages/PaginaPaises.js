import CardCountry from "../components/CardCountry";

function PaginaPaises() {
  return (
    <>
      <CardCountry nome="Brasil" continente="América do Sul" capital="Brasilia" idioma="Português" /> 
      <CardCountry nome="Alemanha" continente="Europa" capital="Berlim" idioma="Alemão" /> 
      <CardCountry nome="Japão" continente="Ásia" capital="Tokyo" idioma="Japonês" /> 
      <CardCountry nome="Estados Unidos" continente="América do Norte" capital="Washington" idioma="Inglês" /> 
    </>
  );
}

export default PaginaPaises;
