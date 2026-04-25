import { Spin } from "antd";

export const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <Spin size="large" />
    </div>
  );
};
