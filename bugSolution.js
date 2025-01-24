```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialLink = async () => {
      let url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
      }
      //Handle null value by implementing event listener for url changes
      Linking.addEventListener('url', (event) => {
        setInitialUrl(event.url);
      });
    };

    getInitialLink();
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>App opened with URL: {initialUrl}</Text>
      ) : (
        <Text>No initial URL found</Text>
      )}
    </View>
  );
};

export default App;
```