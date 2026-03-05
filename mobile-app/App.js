import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import mobileAds from 'react-native-google-mobile-ads';

const REAL_BANNER_AD_UNIT_ID = Platform.select({
  android: 'ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy',
  ios: 'ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy',
  default: TestIds.BANNER,
});

const BANNER_AD_UNIT_ID = __DEV__ ? TestIds.BANNER : REAL_BANNER_AD_UNIT_ID;

export default function App() {
  useEffect(() => {
    mobileAds().initialize();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.title}>Mobile Ads Test App</Text>
        <Text style={styles.subtitle}>
          Ad mode: {__DEV__ ? 'TEST ADS (__DEV__)' : 'REAL ADS (production build)'}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Banner Ad</Text>
        <View style={styles.adContainer}>
          <BannerAd
            unitId={BANNER_AD_UNIT_ID}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Notes</Text>
          <Text style={styles.infoText}>- In __DEV__, app always uses Google test banner IDs.</Text>
          <Text style={styles.infoText}>- In production build, app uses your real banner IDs.</Text>
          <Text style={styles.infoText}>- Replace placeholder real IDs before releasing.</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  headerBlock: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#4b5563',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  adContainer: {
    minHeight: 70,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  infoCard: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: 14,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },
});
