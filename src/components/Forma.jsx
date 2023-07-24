import React, { useState } from "react";
import ListaUsera from "./ListaUsera";
import RepoLista from "./RepoLista";

const Forma = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://api.github.com/users/${inputValue}`);
    const data = await response.json();
    setUser(data);

    fetchRepo();
  };

  const fetchRepo = async () => {
    const response = await fetch(
      `https://api.github.com/users/${inputValue}/repos`
    );
    const reposData = await response.json();
    setRepos(reposData);
  };

  const handleReset = () => {
    setInputValue("");
    setUser([]);
    setRepos([]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Unesite username"
        />
        <button type="submit">Traži</button>
      </form>

      {inputValue !== "" && (
        <>
          <button onClick={handleReset}>Reset</button>
          <ListaUsera user={user} />
          <RepoLista repos={repos} />
        </>
      )}
    </>
  );
};

export default Forma;
