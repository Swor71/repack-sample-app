import React, { useCallback, useRef, useState } from 'react';
import { Button, View } from 'react-native';

export function FirstAppScreen() {
  return (
    <View>
      <Button title="Install" disabled={isInstalled} onPress={install} />
      <Button title="Remove" disabled={!isInstalled} onPress={uninstall} />
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        disabled={!isInstalled}
        onPress={toggle}
      />
      {isInstalled && isVisible
        ? React.createElement(firstAppContent.current, {})
        : null}
    </View>
  );
}

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const FirstAppChunk = React.lazy(
//   () => import(/* webpackChunkName: "firstapp" */ '../apps/FirstApp'),
// );

// export function FirstAppScreen() {
//   return (
//     <View style={styles.container}>
//       <React.Suspense fallback={<Text>Loading...</Text>}>
//         <FirstAppChunk />
//       </React.Suspense>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
