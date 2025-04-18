import { useEffect, useState, useMemo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPokemons } from "../controller/getPokemon";
import { Pokemon } from "../models/pokemon";
import PokemonCard from "../components/PokemonCard";

const Listado = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    fetchData();
  }, []);

  const filtrados = useMemo(() => {
    return pokemons
      .slice(0, 151)
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
  }, [pokemons, query]);

  return (
    <div className="bg-danger min-vh-100">
      <h1 className="text-center my-3 text-warning mt-0 pt-3">Pokedex</h1>

      <header className="text-center mt-0 pb-3">
        <input
          value={query}
          placeholder="Buscar pokemon"
          onChange={(e) => setQuery(e.target.value.trim())}
          type="text"
        />
      </header>

      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3 mx-3 pb-4">
            {filtrados.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado;
