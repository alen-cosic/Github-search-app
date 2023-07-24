import React from "react";

const RepoLista = ({ repos }) => {
  return (
    <>
      {repos.length > 0 && (
        <ul className="repo_lista">
          {repos.map((repo) => (
            <li className="repo_items" key={repo.id}>
              {repo.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RepoLista;
