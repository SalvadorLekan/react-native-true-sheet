import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TrueSheetOverlay } from '@lodev09/react-native-true-sheet';

import { Button } from '@example/shared/components';

import { ReproScreen } from '../../components/ReproScreen';

export default function ReproOverlay() {
  const router = useRouter();

  return (
    <ReproScreen
      title="Repro Overlay"
      description="This screen hosts a TrueSheetOverlay. Pushing a screen over it detaches the overlay host."
    >
      <Button text="Push screen" onPress={() => router.push('/test')} />
      <TrueSheetOverlay>
        <View pointerEvents="none" style={styles.badge}>
          <Text style={styles.text}>Overlay</Text>
        </View>
      </TrueSheetOverlay>
    </ReproScreen>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
