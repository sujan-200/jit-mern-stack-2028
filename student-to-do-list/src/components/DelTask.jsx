export default function DelTask(props) {
  return (
    <button onClick={() => props.onDelete(props.taskId)}>Delete</button>
  );
}