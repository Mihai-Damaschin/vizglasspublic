import { redirect } from "next/navigation";

const Home = () => {
  redirect("/en");

  return <p>Redirecting...</p>;
};

export default Home;
