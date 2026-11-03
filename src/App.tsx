import { useEffect, useState } from 'react';

function App() {
  // useState untuk menampung datanya
  const [pokemonList, setPokemonList] = useState([]);
  const [userList, setUserList] = useState([]);

  const [errorPokemon, setErrorPokemon] = useState(null);
  const [errorUser, setErrorUser] = useState(null);

  const [pokemonLoading, setPokemonLoading] = useState(true);

  //useEffect untuk mengambil datanya saat pertama kali reload
  useEffect(() => {
    const getPokemon = async () => {
      setPokemonLoading(true);

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');

        if (!response.ok) {
          throw new Error('Terjadi kesalahan');
        }

        const data = await response.json();
        setPokemonList(data.results);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        setErrorPokemon(error.message);
      } finally {
        setPokemonLoading(false);
      }
    };

    getPokemon();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
          throw new Error('Terjadi kesalahan!');
        }

        const data = await response.json();
        setUserList(data.users);
      } catch (error) {
        setErrorUser(error.message);
      }
    };

    getUsers();
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        gap: '30px',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <h1>Poke API</h1>

        {/* Jika data di pokemonList lebih besar dari 0 */}
        {pokemonList.length > 0 ? (
          // maka tampilkan hasil dari kode ini
          pokemonLoading ? (
            <span>Harap tunggu...</span>
          ) : (
            pokemonList.map((pokemon, index) => {
              return <span key={index}>{pokemon.name}</span>;
            })
          )
        ) : (
          // jika 0, maka tampilkan ini
          <span>{errorPokemon}</span>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <h1>Users API</h1>
        {userList.length > 0 ? (
          userList.map((user, index) => {
            return <span key={index}>{user.firstName}</span>;
          })
        ) : (
          <span>{errorUser}</span>
        )}
      </div>
    </section>
  );
}

export default App;
