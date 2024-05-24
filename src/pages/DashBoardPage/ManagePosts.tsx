import { Avatar, Breadcrumb, Button, Image, Layout, Popconfirm, Table, Tag } from "antd";
import type { TableProps } from "antd";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

interface DataType {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  createDate: string;
  updateDate: string;
  url_tag: string;
  status: string;
}

export const ManagePosts = () => {
  const [dataSource, setDatasource] = useState<DataType[]>([]);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
      width: "15px",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        const color = status === "Published" ? "green" : "volcano";
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Create Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "5%",
      render: (date) => moment(date).format("DD/MM/yyyy"),
    },
    {
      title: "Update Date",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: "5%",
      render: (date) => moment(date).format("DD/MM/yyyy"),
    },
    {
      title: "URL Tag",
      dataIndex: "url-tag",
      key: "url-tag",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (anh) => <Image src={anh} width={50} />,
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handelDeleteMPosts(id)}
            okText="Yes"
            type="primary"
            Text="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement");
      console.log(response.data);
      setDatasource(response.data);
    };
    fetchPosts();
  }, []);

  const handelDeleteMPosts = async (id: string) => {
    const respponse = await axios.delete(`https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement/${id}`);
    console.log(respponse);
    const listAdterDelele = dataSource.filter((post) => post.id !== id);
    setDatasource(listAdterDelele);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-1  min-h-[100vh]">
        <div className="p-5 bg-white shadow-lg flex justify-end ">
          <div>
            <Avatar>U</Avatar>
          </div>
        </div>
        <div className="py-5 px-5">
          <div>
            <Breadcrumb
              items={[
                {
                  href: "/",
                  title: <HomeOutlined />,
                },
                {
                  href: "/dashboard",
                  title: (
                    <>
                      <UserOutlined />
                      <span>DashBoard</span>
                    </>
                  ),
                },
                {
                  title: "Management Posts",
                },
              ]}
            />
          </div>
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </Layout>
  );
};
export default ManagePosts;
