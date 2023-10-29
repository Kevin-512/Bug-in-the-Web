import React from "react";
import Bar from "../components/Bar";
import DateFlipper from "../DateFlipper";
import Captcha from "../Captcha";
import { Toolbar } from "@mui/material";
import Car from "../car";

const Endpage = () => {
  return (
    <div>
      <div style={{ width: "50%", paddingLeft: "400px" }}>
        <Bar title="???" pages={["Page1", "Page2"]} links ={["/testpageone", "/testpagetwo"]} />
      </div>
      <div style={{ width: "50%", paddingLeft: "200px" }}>
        <Bar title="!!!" pages={["Page2", "Page3"]} links ={["/testpagetwo", "/testpagethree"]} />
      </div>
      <div style={{ width: "50%", paddingLeft: "0px" }}>
        <Bar title="///" pages={["Page3", "Page1"]} links ={["/testpagethree", "/testpageone"]} />
      </div>
      <Toolbar/>
      <DateFlipper/>
      <Toolbar/>
      <Captcha />
      <Toolbar/>
      <Car />
      <Toolbar/>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

export default Endpage;
