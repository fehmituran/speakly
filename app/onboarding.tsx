import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { colors, fonts } from "@/constants/theme";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 px-6 pt-2 pb-8">
        {/* Logo Header */}
        <View className="flex-row items-center justify-center gap-2 mb-10">
          <Image
            source={images.mascotLogo}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.appName}>speakly</Text>
        </View>

        {/* Title */}
        <View className="mb-6">
          <Text style={styles.titleBlack}>Your AI language</Text>
          <Text style={styles.titlePurple}>teacher.</Text>
          <Text style={styles.subtitle}>
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot + Speech Bubbles */}
        <View className="flex-1 items-center justify-center">
          <View style={[styles.bubble, styles.bubbleLeft]}>
            <Text style={styles.bubbleText}>Hello!</Text>
          </View>

          <View style={[styles.bubble, styles.bubbleTopRight]}>
            <Text style={[styles.bubbleText, { color: colors.primary }]}>¡Hola!</Text>
          </View>

          <View style={[styles.bubble, styles.bubbleBottomRight]}>
            <Text style={[styles.bubbleText, { color: colors.error }]}>你好!</Text>
          </View>

          <Image
            source={images.mascotWelcome}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(auth)/sign-in")}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  appName: {
    fontFamily: fonts.semiBold,
    fontSize: 22,
    color: colors.ink,
  },
  titleBlack: {
    fontFamily: fonts.bold,
    fontSize: 32,
    lineHeight: 40,
    color: colors.ink,
  },
  titlePurple: {
    fontFamily: fonts.bold,
    fontSize: 32,
    lineHeight: 40,
    color: colors.primary,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 22,
    color: colors.muted,
    marginTop: 8,
  },
  mascotImage: {
    width: 260,
    height: 260,
  },
  bubble: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  bubbleText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.ink,
  },
  bubbleLeft: {
    left: 0,
    top: "38%",
  },
  bubbleTopRight: {
    right: 0,
    top: "10%",
  },
  bubbleBottomRight: {
    right: 8,
    bottom: "18%",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: "#ffffff",
  },
});
