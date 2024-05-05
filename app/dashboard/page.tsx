import ButtonAccount from "@/components/ButtonAccount";
import {ChatView} from "@/components/custom/ChatView";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="min-h-screen">


      <div className="drawer drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>

        {/* Page content here */}
        <ChatView/>

        <div className="drawer-side min-h-full flex flex-col">
          <div className={'flex flex-row p-4 gap-1 items-center w-fit mx-auto'}>
            <h1 className={'text-xl font-bold text-blue-600'}>LocalDUDE</h1>
          </div>
          <p className={'text-xs font-bold px-4 text-green-600'}>Previous dialogs</p>
          <ul className="menu px-2 w-60 text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
          <div className={'px-2 mt-auto mb-0'}>
            <ButtonAccount/>
          </div>

        </div>
      </div>
    </main>
  );
}
