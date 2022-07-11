import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChunkManager } from '@callstack/repack/client';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './App';

ChunkManager.configure({
  storage: AsyncStorage,
  resolveRemoteChunk: async chunkId => {
    coonsole.log('CHU CHU NK', `http://localhost:5000/chunk/${chunkId}`);

    return {
      url: `http://localhost:5000/chunks/${chunkId}`,
    };
  },
});

//http://domain.exaple/apps/${chunkId}`

AppRegistry.registerComponent(appName, () => App);
