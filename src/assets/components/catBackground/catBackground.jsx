import React, { useEffect, useState } from 'react';
import "./catBackground.css";

const CatBackground = () => {
  const [catUrl, setCatUrl] = useState(''); // State to store the cat image URL
  const [imageKey, setImageKey] = useState(Date.now()); // Key to force component re-render

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const url = 'https://cataas.com/cat?position=center&width=500&height=500'; // API URL for fetching cat images
        const response = await fetch(url, {
          headers: { 'accept': 'image/*' },
        });

        // If the response is valid
        if (response.ok) {
          const catImageUrl = response.url; // Get the image URL
          setCatUrl(catImageUrl); // Set the URL to the state

          // Change the image key to force re-render
          setImageKey(Date.now()); // Use current timestamp for unique key
        } else {
          console.error('Error fetching cat image');
        }
      } catch (error) {
        console.error('Error fetching cat image:', error);
      }
    };

    // Fetch the cat image initially
    fetchCat();

    // Set an interval to fetch a new cat image every 1 minute
    const intervalId = setInterval(fetchCat, 100000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  return (
    <div
      className="cat-background"
      style={{ backgroundImage: catUrl ? `url(${catUrl})` : 'none', transition: 'background-image 1s ease-in-out' }}
      key={imageKey} // Adding the key prop here
    />
  );
};

export default CatBackground;
