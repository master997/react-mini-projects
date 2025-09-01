export default function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}
