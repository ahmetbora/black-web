"use client"
import BlackFooter from "../tools/BlackFooter";
import { blackMenu } from "@/data/menuBlack";
import HeaderBlack from "../tools/HeaderBlack";
import Header10 from "@/components/headers/Header10";

const BlackIletisim = () => {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={blackMenu} />
          </nav>
          <main id="main" style={{ minHeight: 500 }}>
            <section>

            </section>
          </main>
          <BlackFooter />

        </div>
      </div>
    </>
  )
}


export default BlackIletisim;