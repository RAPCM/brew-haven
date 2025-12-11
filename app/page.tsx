// app/page.tsx  (SERVER COMPONENT – no "use client" here)
import HomeClient from "@/components/home-client";
import MenuHighlights from "@/components/menu-highlights";

export default function Home() {
  return (
    <HomeClient>
      <MenuHighlights />
    </HomeClient>
  );
}
