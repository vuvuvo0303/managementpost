import {  Layout } from "antd";import Sidebar from "../../components/sidebar";


const DashBoard = () => {
  return (
    <Layout className="flex">
      <Sidebar />
      <div className="flex-1  min-h-[100vh]">
        <div className="p-5 bg-white shadow-lg flex justify-between ">
          <div></div>
          <div>
        
          </div>
        </div>
        <div className="py-5 px-5"></div>
      </div>
    </Layout>
  );
};

export default DashBoard;
