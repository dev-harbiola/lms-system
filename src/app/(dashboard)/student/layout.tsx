import { sideBarMenus } from "@/data/menus";
import Main from "../component/main";
import SideBar from "../component/sidebar";

export const metadata = {
  title: "Dashboard | Student",
  description: "Leaning Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar sidebar={sideBarMenus}/>
          <Main role="STUDENT: KI-STD-001">{children}</Main>
        </div>
      </body>
    </html>
  );
}
