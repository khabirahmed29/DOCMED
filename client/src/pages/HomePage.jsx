import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Doctors from "../components/Doctors";
import About from "../components/About";
import Library from "../components/Library";
import Footer from "../components/Footer";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <Layout />
      <Hero />
      <Doctors />
      <About />
      <Library />
      <Footer />
    </div>
  );
};

export default HomePage;
