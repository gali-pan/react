import styles from "./Profile.module.css";

export const Profile = (props) => {
  let userId = location.pathname.split("/")[2];
  let user = props.function (userId);

    return (
        <div className="row">
        <div className="col-md-4">
        <img width="100%" src={user.avatar} alt="" />
        </div>
        <div className="col-md-8">
        <h2 className={styles.id}>ID: <span> {user.id}</span></h2>
        <h3 className={styles.name}>Name, surname: <span>{user.name} {user.surname}</span></h3>
        <h3 className={styles.email}>Email: <span>{user.email}</span></h3>
        <p className={styles.about}>{user.about} </p>
        <button style={{backgroundColor: "lightgrey", padding: "5px", borderRadius:"6px"}}>Send</button>
        </div>
        </div>

    )
  };