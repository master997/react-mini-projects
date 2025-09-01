import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="cards">
      <ProfileCard
        name="Monkey D Luffy"
        bio="Future King of the Pirates "
        image="https://i.redd.it/is-luffy-considered-good-looking-in-the-one-piece-world-v0-bk25p47qdpvd1.jpg?width=1075&format=pjpg&auto=webp&s=4a6a24bc10e93a7e5d9f81f705a543f70945823e"
      />
      <ProfileCard
        name="Mohammed Master"
        bio="Aspiring software dev"
        image="https://preview.redd.it/can-someone-make-trafalgar-law-from-one-piece-for-me-3-v0-nfkx2cml8f4b1.jpg?width=640&crop=smart&auto=webp&s=077b544e46adba040759572cb13a6b5cdf5bc1a4"
      />{" "}
      <ProfileCard
        name="Zoro"
        bio="Future strongest swordsman"
        image="https://wallpapers.com/images/thumbnail/smiling-anime-zoro-pfp-in-snow-sqq677pxovcq16xq.webp"
      />
    </div>
  );
}

export default App;
