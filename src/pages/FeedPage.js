import { useState, useEffect } from "react";
import axios from "axios";

const FeedPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.swapi.tech/api/planets");
        console.log("response:", response);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div> Welcome to my Star Wars Feed Page</div>
      <h3>Planets</h3>
    </div>
  );
};

export default FeedPage;
