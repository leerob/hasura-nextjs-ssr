import { getTodos } from '@/lib/hasura';

export async function getServerSideProps() {
  const { todos } = await getTodos();

  return { props: { todos } };
}

export default function TodoList({ todos }) {
  return todos.map((todo) => (
    <p>
      <code>{JSON.stringify(todo, undefined, 2)}</code>
    </p>
  ));
}
