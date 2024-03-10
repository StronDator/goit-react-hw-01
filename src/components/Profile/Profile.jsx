export default Profile;
import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.imageContainer}>
        <img className={css.profileImage} src={image} alt={name} />
        <p className={css.title}>{name}</p>
        <p className={css.text}>{"@" + tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
