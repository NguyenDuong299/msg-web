import React, { Fragment } from "react";
import AdminHeader from "./header/page";
import AdminFooter from "./footer/page";
import AdminSidebar from "./sidebar/page";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <AdminSidebar />
      <div id="content-wrapper" className="flex flex-col">
        <div id="content">
          <AdminHeader />
          <main>{children}</main>
        </div>
        <AdminFooter />
      </div>
    </Fragment>
  );
}
