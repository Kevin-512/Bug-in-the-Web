import React from "react";
import Bar from "../components/Bar";

const Endpage = () => {
  return (
    <div>
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
      <div style={{ width: "50%", paddingLeft: "400px" }}>
        <Bar title="Annoying?" pages={["yes", "no"]} links ={["/testpageone", "/testpagetwo"]} />
      </div>
      <div style={{ width: "50%", paddingLeft: "200px" }}>
        <Bar title="Go Back?" pages={["yes", "no"]} links ={["/testpageone", "/testpagetwo"]} />
      </div>
      <div style={{ width: "50%", paddingLeft: "0px" }}>
        <Bar title="Looking for something else?" pages={["yes", "no"]} links ={["/testpageone", "/testpagetwo"]} />
      </div>
    </div>
  );
};

export default Endpage;
