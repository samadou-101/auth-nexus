import style from "./styles/authoptions.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hooks";
import { selectTab } from "../../redux/slices/authTabSlice";

const AuthOptions = () => {
  const selectedTab = useAppSelector((state) => state.authOption.selectedTab);
  const dispatch = useAppDispatch();
  const handleTabClick = (index: 0 | 1 | 2) => {
    dispatch(selectTab(index));
  };
  return (
    <div className={style["auth-options-container"]}>
      <div
        className={style["session"]}
        onClick={() => handleTabClick(0)}
        style={{
          background:
            selectedTab == 0
              ? " linear-gradient(to right, #a1c4fd, #1e3c72)"
              : "white",
          color: selectedTab == 0 ? "white" : "black",
        }}
      >
        Session
      </div>
      <div
        className={style["jwt"]}
        onClick={() => handleTabClick(1)}
        style={{
          background:
            selectedTab === 1
              ? " linear-gradient(to right, #a1c4fd, #1e3c72)"
              : "white",
          color: selectedTab === 1 ? "white" : "black",
        }}
      >
        JWT
      </div>
      <div
        className={style["oauth"]}
        onClick={() => handleTabClick(2)}
        style={{
          background:
            selectedTab === 2
              ? " linear-gradient(to right, #a1c4fd, #1e3c72)"
              : "white",
          color: selectedTab === 2 ? "white" : "black",
        }}
      >
        OAuth2
      </div>
    </div>
  );
};

export default AuthOptions;
