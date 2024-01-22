import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [userList, setUserList] = useState([]);
  const userId = 1; // Replace with the actual user ID

  useEffect(() => {
    // Fetch the user's list from the server
    fetch(`http:your-server-url/user/${userId}/list`)
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .catch((error) => console.error('Error fetching user\'s list:', error));
  }, [userId]);

  return (
    <View>
      <Text>User's List:</Text>
      {userList.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

export default App;
