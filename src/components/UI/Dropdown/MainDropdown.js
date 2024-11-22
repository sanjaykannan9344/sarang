import { Link } from "react-router-dom";
import { Dropdown, ButtonToolbar, Button } from "rsuite";
import { menuList1, menuList2 } from "../../../data/newData";
import "rsuite/dist/rsuite.min.css";
import "./MainDropdown.css";

const AsmsData = () => {
  return (
    // ASMS vehicle submenu
    <div>
      {menuList1.map((menu, index) => (
        <div key={index}>
          <Dropdown.Menu
            title={menu.name}
            style={{
              marginTop: menu.submenu.length > 8 ? "-135px" : "-35px",
              marginLeft: 3,
              border: "2px solid white",
            }}
          >
            <div
              className={
                menu.submenu.length > 6
                  ? "overflow-y-auto d-h:h-72  style-1"
                  : ""
              }
            >
              {menu.submenu.map((item, itemIndex) => (
                <Dropdown.Item key={`${index}-${itemIndex}`}>
                  <Link to={item.path}>{item.name}</Link>
                </Dropdown.Item>
              ))}
            </div>
          </Dropdown.Menu>
        </div>
      ))}
    </div>
  );
};

// const GeneratorVehicle = () => {
//   // Generater vehicle submenu
//   return (
//     <div>
//       {menuList2.map((menu, index) => (
//         <Dropdown.Menu
//           key={index}
//           title={menu.name}
//           style={{
//             marginTop: menu.submenu.length > 6 ? "-100px" : 0,
//             marginLeft: 3,
//             border: "2px solid white",
//           }}
//         >
//           <div>
//             {menu.submenu.map((item, itemIndex) => (
//               <Dropdown.Item key={`${index}-${itemIndex}`}>
//                 <Link to={item.path}>{item.name}</Link>
//               </Dropdown.Item>
//             ))}
//           </div>
//         </Dropdown.Menu>
//       ))}
//     </div>
//   );
// };

function MainDropdown() {
  return (
    <div>
      <Button style={{ padding: "0px" }}>
        <Link to={`/video/${1}`}>Introduction to Sarang ESM System</Link>
      </Button>
      <div>
        <ButtonToolbar>
          <Dropdown
            style={{ marginTop: "0.75rem", padding: "0px" }}
            title="Sarang ESM System"
            placement="rightStart"
          >
            <AsmsData />
          </Dropdown>
        </ButtonToolbar>
      </div>
      {/* <div className="mt-3">
        <ButtonToolbar>
          <Dropdown
            style={{ marginRight: 3 }}
            title="GeneratorVehicle"
            placement="rightStart"
          >
            <GeneratorVehicle />
          </Dropdown>
        </ButtonToolbar>
      </div> */}
    </div>
  );
}

export default MainDropdown;
