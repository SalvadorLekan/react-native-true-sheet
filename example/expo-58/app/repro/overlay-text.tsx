import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TrueSheetOverlay } from '@lodev09/react-native-true-sheet';

import { Button } from '@example/shared/components';

import { ReproScreen } from '../../components/ReproScreen';

export default function ReproOverlayText() {
  const [count, setCount] = useState(0);

  return (
    <ReproScreen
      title="Repro Overlay Text"
      description="Centered text rendered through a TrueSheetOverlay. Updating the counter re-lays out the overlay's children."
    >
      <Button text="Update counter" onPress={() => setCount((value) => value + 1)} />
      <TrueSheetOverlay>
        <View style={styles.overlay}>
          <Text style={styles.title}>Centered overlay text</Text>
          <Text style={styles.text}>Updated {count} times</Text>
        </View>
      </TrueSheetOverlay>
    </ReproScreen>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});
