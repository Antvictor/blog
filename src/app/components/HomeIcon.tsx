'use client'
// HomeIcon.tsx
import { HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export const HomeIcon = () => {
  const router = useRouter();

  return (
    <HomeOutlined
      style={{ fontSize: "24px", cursor: "pointer", marginLeft: "20px" }}
      onClick={() => router.push("/")}
    />
  );
};
