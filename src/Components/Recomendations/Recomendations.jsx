import React from "react";

import LoadingIcon from "../Lib/Loading/LoadingIcon";
import Recomendation from "../Recomendation/Recomendation";

import "./Recomendations.scss";

const Recomendations = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");

      const data = await res.json();

      if (data?.data) {
        setUsers([...data?.data]);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="recomendations">
      <div className="recomendations__top">
        <h2 className="recomendations__heading">Who to follow</h2>
      </div>

      <ul className="recomendations__list">
        {loading && <LoadingIcon />}

        {users?.length > 0 && users.map((user) => <Recomendation key={user.id} user={user} />)}
      </ul>

      <div className="recomendations__bottom">
        <a className="recomendations__link" href="#link">
          Show more replies
        </a>
      </div>
    </section>
  );
};

export default Recomendations;
