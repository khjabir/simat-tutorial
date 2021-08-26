import { Button, Form, Input } from "antd";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const Router = useRouter();

  const login = () => {
    Router.push("students");
  };
  return (
    <div className={styles.container}>
      <Form>
        <Form.Item>
          <Input placeholder="Usename" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Password" type="password" />
        </Form.Item>
      </Form>
      <Button type="primary" danger onClick={() => login()}>
        Click Me
      </Button>
    </div>
  );
}
