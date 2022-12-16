import React, { useState} from 'react'



export default function ImageList() {
  const [images, setimages] = useState([
    require('../assets/ARG1.jpeg'),
    require('../assets/ARG2.jpeg'),
    require('../assets/ARG3.jpg'),
  ]);

  return (
    <FlatList
      data={images}
      key={"2"}
      numColumns={2}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{
            width: 180,
            height: 220,
            borderWidth: 2,
            borderColor: "#c35547",
            resizeMode: "contain",
            margin: 6,
          }}
          keyExtractor={(item) => item.id}
        /> 
      )}
    /> 
  );
  }
