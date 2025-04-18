import { Pokemon } from '../models/pokemon';

export async function getPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon data.");
  }

  const data: { results: any[] } = await response.json();

  const pokemons: Pokemon[] = data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imggif: normalizeSpriteName(pokemon.sprites.animated),
    imgnormal: normalizeSpriteName(pokemon.sprites.normal),
    imglarge: normalizeSpriteName(pokemon.sprites.large),
    total: pokemon.total,
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    sp_atk: pokemon.sp_atk,
    sp_def: pokemon.sp_def,
    speed: pokemon.speed,
    type: pokemon.type[0],
  }));

  const uniquePokemons = deduplicatePokemons(pokemons);

  return uniquePokemons;
}

function normalizeSpriteName(name: string): string {
  return name
    .replace("farfetch'd", "farfetchd")
    .replace("mr.-mime", "mr-mime")
    .replace("♂", "-m")
    .replace("♀", "-f");
}

function deduplicatePokemons(pokemons: Pokemon[]): Pokemon[] {
  const seen = new Set();
  return pokemons.filter((pokemon) => {
    if (seen.has(pokemon.id)) return false;
    seen.add(pokemon.id);
    return true;
  });
}
