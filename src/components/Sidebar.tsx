import { DesktopOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const [current, setCurrent] = useState("1");
  const [items, setItems] = useState<MenuItem[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  function getItem(label: string, key: string, icon: ReactNode, children?: ReactNode) {
    return {
      key,
      icon,
      children,
      label: <Link to={key}>{label}</Link>,
    };
  }

  function loadItems() {
    setItems([getItem("Manage Posts", "/dashboard/management-posts", <DesktopOutlined />)]);
  }
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  useEffect(() => {
    loadItems();
  }, []);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        theme="dark"
        onClick={onClick}
        defaultOpenKeys={["1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
