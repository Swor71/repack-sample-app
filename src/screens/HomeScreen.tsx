import React, { useCallback, useState } from 'react';
import { ChunkManager } from '@callstack/repack/client';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { apps } from '../apps';

export function HomeScreen() {
  const [installedApps, setInstalledApps] = useState({});

  const install = useCallback(async (appId: string) => {
    const bundle = await apps.find(({ id }) => id === appId)?.load();

    setInstalledApps(prevAllApps => ({
      ...prevAllApps,
      [appId]: bundle,
    }));
  }, []);

  const uninstall = useCallback(async (appId: string) => {
    setInstalledApps(prevInstalledApps => ({
      ...prevInstalledApps,
      [appId]: undefined,
    }));

    await ChunkManager.invalidateChunks([appId]);
  }, []);

  console.log('ssss', { installedApps });

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.row}>
        {apps.map(app => {
          const isInstalled = installedApps[app.id];

          return (
            <View>
              <Pressable
                onPress={() => !isInstalled && install(app.id)}
                onLongPress={() => isInstalled && uninstall(app.id)}
                style={styles.link}>
                <Text>{app.title}</Text>
                <Text>{isInstalled ? 'uninstall' : 'install'}</Text>
              </Pressable>
              {isInstalled
                ? React.createElement(installedApps[app.id].default, {})
                : null}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    padding: 48,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  link: {
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    width: 150,
    marginHorizontal: 6,
  },
  disabled: {
    color: '#999',
    borderColor: '#999',
  },
});

{
  /* <View>
  <Button title="Install" disabled={isInstalled} onPress={install} />
  <Button title="Remove" disabled={!isInstalled} onPress={uninstall} />
  <Button
    title={isVisible ? 'Hide' : 'Show'}
    disabled={!isInstalled}
    onPress={toggle}
  />
  {isInstalled && isVisible
    ? React.createElement(miniAppContent.current, {})
    : null}
</View>; */
}
{
  /* <Pressable
          disabled={!isInstalled}
          style={[styles.link, !isInstalled && styles.disabled]}
          onPress={() => navigation.navigate('FirstAppScreen')}>
          <Text style={!isInstalled && styles.disabled}>
            Go to First App Screen
          </Text>
        </Pressable>
        {isInstalled ? React.createElement(firstAppContent.current, {}) : null} */
}
