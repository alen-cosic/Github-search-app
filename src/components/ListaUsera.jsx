import React from "react";

const ListaUsera = ({ user }) => {
  return (
    <>
      <div className="name_avatar">
        {user.name && <h2 className="name">{user.name}</h2>}
        {user.avatar_url && (
          <img id="avatar" src={user.avatar_url} alt={user.login} />
        )}
      </div>
      <div className="location_bio">
        {user.location && <p className="location">Location: {user.location}</p>}
        {user.bio && <p className="bio">Bio: {user.bio}</p>}
      </div>
    </>
  );
};

export default ListaUsera;
