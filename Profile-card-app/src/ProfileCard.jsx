export default function ProfileCard(props) {
  return (
    <div className="card">
      <img className="avatar" src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}
