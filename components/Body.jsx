import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleUser } from "../provider/userSlice";
import Link from "next/link";
import styles from "../styles/Body.module.css";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

function Body({ profilePic, midComp }) {
  const { data: session, status } = useSession();
  const selector = useSelector(handleUser);
  const user = selector.payload.userSlice.value;

  const [createActive, setCreateActive] = useState(true);
  const [disActive, setDisActive] = useState(false);
  const [favActive, setFavActive] = useState(false);

  const switchCreate = () => {
    setCreateActive(true);
    setDisActive(false);
    setFavActive(false);
    console.log("create");
  };

  const switchDiscover = () => {
    setDisActive(true);
    setCreateActive(false);
    setFavActive(false);
    console.log("discover");
  };

  const switchFav = () => {
    setFavActive(true);
    setCreateActive(false);
    setDisActive(false);
    console.log("fav");
  };

  return (
    <div className={styles.Body}>
      <nav className={styles.nav}>
        <div className={styles.options}>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/create">
                <a className={styles.link}>Create</a>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                <a className={styles.link}>Favorites</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.rooms}>
          <p className={styles.roomsTitle}>Rooms</p>
          <ul>
            <li>
              <Link href="/room">
                <a className={styles.linkLittle}>Ipsum</a>
              </Link>
            </li>
            <li>
              <Link href="/room">
                <a className={styles.linkLittle}>Lorem</a>
              </Link>
            </li>
            <li>
              <Link href="/room">
                <a className={styles.linkLittle}>Alcholics</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>© 2022 Clann</div>
      </nav>
      <main className={styles.main}>{midComp}</main>
      <aside className={styles.aside}>
        <div onClick={() => signOut()}>
          <ExitToAppRoundedIcon
            sx={{
              height: "45px",
              width: "45px",
            }}
          />
        </div>
        <div className={styles.userPic}>
          <Avatar
            alt="profile Picture"
            src={user.profile_pic}
            sx={{
              height: "42px",
              width: "42px",
            }}
          />
        </div>
      </aside>
    </div>
  );
}

export default Body;
