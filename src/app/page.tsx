import { navItems } from "@/data/static-data.";

type NavItem = {
  id: number;
  title: string;
  url: string;
};

export default function Home() {
  return (
    <div>
      {navItems.map((item: NavItem) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.url}</p>
        </div>
      ))}
    </div>
  );
}
