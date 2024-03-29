"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Suggest() {
  const router = useRouter();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <p className="mt-20">ありがとうございました</p>
        <p>Slackにて</p>
        <p>スクショと運転後アンケートをお願いします</p>
        <p className="mt-20">
          <Button
            className="btn-lg btn-info"
            onClick={() => router.push("/speedmeter")}
          >
            もう一度使う
          </Button>
        </p>
      </div>
    </div>
  );
}
