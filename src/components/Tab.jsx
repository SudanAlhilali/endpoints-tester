import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CreateTable from "./Table";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import CreateJsonText from "./CreateJsonText";

const SelectedTab = () => {
  const [value, setValue] = useState(0);
  const { params, setParams, headers, setHeaders } = useContext(DataContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <>
      <Box style={{ marginTop: 20 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "#f26b3a", height: 4, bottom: 2 },
          }}
          S
        >
          <Tab
            label="Query Params"
            style={{ textTransform: "none", fontSize: 16 }}
          />
          <Tab
            label="Headers"
            style={{ textTransform: "none", fontSize: 16 }}
          />
          <Tab label="Body" style={{ textTransform: "none", fontSize: 16 }} />
        </Tabs>
        <Box
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}
        >
          <CreateTable text="params" data={params} setData={setParams} />
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-${1}`}
          aria-labelledby={`simple-tab-${1}`}
        >
          <CreateTable text="headers" data={headers} setData={setHeaders} />
        </Box>
        <Box
          role="tabpanel"
          hidden={value !== 2}
          id={`simple-tabpanel-${2}`}
          aria-labelledby={`simple-tab-${2}`}
        >
          <CreateJsonText />
        </Box>
      </Box>
    </>
  );
};

export default SelectedTab;
