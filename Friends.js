function Friends(props) {
  return (
    <>
      {props.friends === true && (
        <ol>
          <li>kawiso</li>
          <li>ivan</li>
          <li>jonah</li>
          <li>sudaisi</li>
          <li>hakim</li>
        </ol>
      )}
    </>
  );
}
export default Friends;
