type Post = {
  id: number;
  title: string;
};

const About = async () => {
  const res: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>سلام!!!</h1>
      <ul>{posts?.map((item) => <li key={item?.id}>{item?.title}</li>)}</ul>
    </main>
  );
};

export default About;
