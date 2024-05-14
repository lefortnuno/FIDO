import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SinInProtected(props) {
  const Cmp = props.Cmp;

  const navigate = useNavigate();
  const token = localStorage.getItem("isLog");

  useEffect(() => {
    // if (!token) {
    //   navigate("/bureau/");
    // }
  }, []);

  return (
    <>
      <Cmp />
    </>
  );
}
