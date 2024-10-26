import BlackFooter from "../tools/BlackFooter";
import { blackMenu } from "@/data/menuBlack";
import HeaderBlack from "../tools/HeaderBlack";

const BlackIletisim = () => {
    return (
        <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <HeaderBlack links={blackMenu} />
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